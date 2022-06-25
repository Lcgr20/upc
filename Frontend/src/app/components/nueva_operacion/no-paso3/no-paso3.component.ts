import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { InvitationCode } from 'src/app/models/InvitationCode';
import { PaymentRecord } from 'src/app/models/PaymentRecord';
import { Transaction } from 'src/app/models/Transaction';
import { InvitationcodeService } from 'src/app/services/invitationcode.service';
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
  codveri!:any;
  codigodeapoyoid!:any;

  constructor(private tasadecambioService:TasasDeCambioService,private paymentrecord:PaymentrecordService,
    private transactionservice:TransactionService,private invitationcodeservice:InvitationcodeService) { }

  ngOnInit(): void {
    this.userid=localStorage.getItem('userid');
    this.dinero_recibes=localStorage.getItem('dinero_recibes');
    this.dinero_recibes=Number(this.dinero_recibes).toFixed(2);
    this.ratio=localStorage.getItem('ratio');
    this.moneda_recibes=localStorage.getItem('moneda_recibes');
    this.moneda_envias=localStorage.getItem('moneda_envias');
    this.dinero_envias=localStorage.getItem('dinero_envias');
    this.banco=localStorage.getItem('banco');
    this.codveri=document.getElementById("codverifi");
    this.codigodeapoyoid=localStorage.getItem('cuponapoyouser');
  }

  creartransaccion(){
    if(this.codveri.value=="12345678"){
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
                  if(this.codigodeapoyoid==undefined){}
                  else{
                    var invitat=new InvitationCode();
                    invitat.inviteCode="string";invitat.numInvitados=0;invitat.userId=0;
                    this.invitationcodeservice.aumentarnum(Number(this.codigodeapoyoid),invitat).subscribe();
                  }
                  alert("Se realizó la operación de forma correcta");
                }
              );
            }
          );
        }
      );
    }
    else{
      alert("Verificación fallida. Por favor, inténtelo otra vez");
    }
    
  }
  limpiar(){
    localStorage.removeItem('dinero_recibes');
    localStorage.removeItem('ratio');
    localStorage.removeItem('moneda_recibes');
    localStorage.removeItem('moneda_envias');
    localStorage.removeItem('dinero_envias');
    localStorage.removeItem('banco');
    window.location.href="/";
  }

}
