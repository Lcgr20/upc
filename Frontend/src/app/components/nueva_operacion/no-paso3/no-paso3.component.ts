import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { PaymentRecord } from 'src/app/models/PaymentRecord';
import { Transaction } from 'src/app/models/Transaction';
import { PaymentrecordService } from 'src/app/services/paymentrecord.service';
import { TasasDeCambioService } from 'src/app/services/tasas-de-cambio.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-no-paso3',
  templateUrl: './no-paso3.component.html',
  styleUrls: ['./no-paso3.component.css']
})
export class NoPaso3Component implements OnInit {

  userid!:any;
  dinero_recibes!:any;
  ratio!:any;
  moneda_recibes!:any;
  moneda_envias!:any;
  dinero_envias!:any;
  banco!:any;

  constructor(private tasadecambioService:TasasDeCambioService,private paymentrecord:PaymentrecordService,
    private transactionservice:TransactionService) { }

  ngOnInit(): void {
    this.userid=localStorage.getItem('userid');
    this.dinero_recibes=localStorage.getItem('dinero_recibes');
    this.ratio=localStorage.getItem('ratio');
    this.moneda_recibes=localStorage.getItem('moneda_recibes');
    this.moneda_envias=localStorage.getItem('moneda_envias');
    this.dinero_envias=localStorage.getItem('dinero_envias');
    this.banco=localStorage.getItem('banco');
  }

  waaaaa(){
    var exchanerateee=new ExchangeRate();
    exchanerateee.currencyA=this.moneda_envias;
    exchanerateee.currencyB=this.moneda_recibes;
    exchanerateee.exchangeRateAB=this.ratio;
    this.tasadecambioService.createtasadecambio(exchanerateee).subscribe(
      (response) => {
        var idtasadecambio=response;

        var paymenntrecord=new PaymentRecord();
        let date = new Date();
        paymenntrecord.paymentDate=date.toISOString().split('T')[0]+"T"+date.toISOString().split('T')[1];
        paymenntrecord.paymentStatus="En proceso";
        paymenntrecord.userId=this.userid;
        this.paymentrecord.createtpaymentrecord(paymenntrecord).subscribe(
          (response2) => {
            var idpaymenntrecord=response2;

            var transacttiion=new Transaction();
            transacttiion.exchangeRateId=Number(idtasadecambio);
            transacttiion.paymentRecordId=Number(idpaymenntrecord);
            transacttiion.receivedQuantity=Number(this.dinero_recibes);
            transacttiion.sentQuantity=Number(this.dinero_envias);
            this.transactionservice.createttransaction(transacttiion).subscribe(
              (response3) => {
                console.log(response3);
              }
            );
          }
        );
      }
    );

  }

}
