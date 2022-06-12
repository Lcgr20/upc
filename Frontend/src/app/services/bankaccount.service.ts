import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BankAccount } from '../models/BankAccount';

@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  private baseUrl: string = environment.baseUrl;
  


  constructor(private http:HttpClient) { }

  createbankaccount(bankAccount: BankAccount){
    return this.http.post(`${this.baseUrl}/BankAccount`,bankAccount);
  }

}
