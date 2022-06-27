import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ExchangeRate } from '../models/ExchangeRate';

@Injectable({
  providedIn: 'root'
})
export class TasasDeCambioService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  async obtenertasadecambio(moneda1:string,moneda2:string){

    var myHeaders = new Headers();
    myHeaders.append("apikey", "6kuQA28Qikxm2hCYg6V0AXQjzKfv4phT");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders
    };

    const tasadecambio= await fetch(`https://api.apilayer.com/fixer/convert?to=${moneda1}&from=${moneda2}&amount=1`, requestOptions)

    const tasadecambio_json = await tasadecambio.json();
    
    return tasadecambio_json;
  }

  createtasadecambio(exchangrate:ExchangeRate){
    return this.http.post(`${this.baseUrl}/ExchangeRate`,exchangrate, {responseType: 'text'});
  }
  gettasasdecambio(){
    return this.http.get<ExchangeRate[]>(`${this.baseUrl}/ExchangeRate`);
  }
  gettasadecambio(id:number){
    return this.http.get<ExchangeRate>(`${this.baseUrl}/ExchangeRate/${id}`);
  }
}
