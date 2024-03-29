import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentRecord } from 'src/app/models/PaymentRecord';
import { PaymentrecordService } from 'src/app/services/paymentrecord.service';
import { Transaction } from 'src/app/models/Transaction';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { TransactionService } from 'src/app/services/transaction.service';
import { TasasDeCambioService } from 'src/app/services/tasas-de-cambio.service';
import {FormGroup, FormControl} from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-historial-operaciones',
  templateUrl: './historial-operaciones.component.html',
  styleUrls: ['./historial-operaciones.component.css']
})
export class HistorialOperacionesComponent implements OnInit {

  id_user!:any;
  records?:PaymentRecord[];
  inprocess_records:any[] = [];
  finished_records:any[] = [];
  record_id!:any;
  updated_record!:any;

  date1!:Date;
  date2!:Date;
  er!:any;
  transactions:any[] = [];

  constructor(private paymentrecordservice: PaymentrecordService, private transactionservice: TransactionService, private tasasdecambioservice: TasasDeCambioService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id_user=localStorage.getItem('userid');
    if(this.id_user==null){this.router.navigate(['../register']);}
    this.get_records(this.id_user);
  }

  get_records(id_user:number) {
    this.paymentrecordservice.getpaymentrecordsfromuser(id_user).subscribe({
      next: (response) => {
        this.records = response;

        for (let r of this.records){
          if (r.paymentStatus == "En proceso")
          {
            this.transactionservice.gettransctions().subscribe({
              next: (data) => {
                this.transactions = data;
                for (let t of this.transactions){
                  if (t.paymentRecordId == r.id) { 
                    this.tasasdecambioservice.gettasadecambio(t.exchangeRateId).subscribe({
                      next: (data) => {
                        this.er = data;
                        this.inprocess_records.push([r, t, this.er]);
                      }
                    }); 
                  }
                }
              }
            });
          }
          if(r.paymentStatus == "Terminada")
          {
            this.transactionservice.gettransctions().subscribe({
              next: (data) => {
                this.transactions = data;
                for (let t of this.transactions){
                  if (t.paymentRecordId == r.id) { 
                    this.tasasdecambioservice.gettasadecambio(t.exchangeRateId).subscribe({
                      next: (data) => {
                        this.er = data;
                        this.finished_records.push([r, t, this.er]);;
                      }
                    }); 
                  }
                }
              }
            });
          }
        }
      },
      error: (e) => console.error(e),
    });
  }

  updatestatus(){
    this.updated_record = this.inprocess_records.pop()[0];
    this.updated_record.paymentStatus = "Terminada"
    this.paymentrecordservice.updatestatus(this.updated_record.id ,this.updated_record).subscribe()
    window.location.href="/historial";
  }

  filter(){
    if (this.date1 == undefined || this.date2 == undefined) {alert("Ingresa dos fechas para filtrar"); return;}

    if (this.date1 > this.date2) {alert("La primera fecha debe ser mayor que la segunda fecha"); return;}

    this.inprocess_records = [] as any[];
    this.finished_records = [] as any[];
    this.paymentrecordservice.getpaymentrecordsfromuser(this.id_user).subscribe({
      next: (response) => {
        this.records = response;

        for (let r of this.records){
          var curr_date = new Date(r.paymentDate!.slice(0,4).toString()+"-"+Number(r.paymentDate!.slice(5,7)).toString()+"-"+r.paymentDate!.slice(8,10).toString());

          if (curr_date > this.date1 && curr_date < this.date2){

            if (r.paymentStatus == "En proceso"){
              this.transactionservice.gettransctions().subscribe({
                next: (data) => {
                  this.transactions = data;
                  for (let t of this.transactions){
                    if (t.paymentRecordId == r.id) { 
                      this.tasasdecambioservice.gettasadecambio(t.exchangeRateId).subscribe({
                        next: (data) => {
                          this.er = data;
                          this.inprocess_records.push([r, t, this.er]);
                        }
                      }); 
                    }
                  }
                }
              });
            }

            if(r.paymentStatus == "Terminada"){
              this.transactionservice.gettransctions().subscribe({
                next: (data) => {
                  this.transactions = data;
                  for (let t of this.transactions){
                    if (t.paymentRecordId == r.id) { 
                      this.tasasdecambioservice.gettasadecambio(t.exchangeRateId).subscribe({
                        next: (data) => {
                          this.er = data;
                          this.finished_records.push([r, t, this.er]);;
                        }
                      }); 
                    }
                  }
                }
              });
            }
          }
          
        }
      },
      error: (e) => console.error(e),
    });
  }
}


