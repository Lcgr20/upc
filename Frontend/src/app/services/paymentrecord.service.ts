import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PaymentRecord } from '../models/PaymentRecord';

@Injectable({
  providedIn: 'root'
})
export class PaymentrecordService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  createtpaymentrecord(paymenttrecord:PaymentRecord){
    return this.http.post(`${this.baseUrl}/PaymentRecord`,paymenttrecord, {responseType: 'text'});
  }
  getpaymentrecordsfromuser(id_user:number){
    return this.http.get<PaymentRecord[]>(`${this.baseUrl}/PaymentRecord/PaymentRecordsFromUser/${id_user}`);
  }
  getpaymentrecords(){
    return this.http.get<PaymentRecord[]>(`${this.baseUrl}/PaymentRecord`);
  }
}
