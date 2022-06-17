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

  getbankaccount(id:number){
    return this.http.get<BankAccount>(`${this.baseUrl}/BankAccount/${id}`)
  }

  getbankaccounts(id_user:number){
    return this.http.get<BankAccount[]>(`${this.baseUrl}/BankAccount/BankAccountsFromUser/${id_user}`);
  }

  createbankaccount(bankAccount: BankAccount){
    return this.http.post(`${this.baseUrl}/BankAccount`,bankAccount);
  }

  updatebankaccount(id:number, bankAccount: BankAccount){
    return this.http.put<BankAccount>(`${this.baseUrl}/BankAccount/${id}`,bankAccount);
  }

  deleteBankaccount(id: number){
    return this.http.delete(`${this.baseUrl}/BankAccount/${id}`);
  }

}
