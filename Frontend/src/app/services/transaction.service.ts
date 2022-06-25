import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  createttransaction(transaction:Transaction){
    return this.http.post(`${this.baseUrl}/Transaction`,transaction);
  }
}
