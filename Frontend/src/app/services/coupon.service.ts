import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getcoupon(id_user:number){
    return this.http.get<Coupon>(`${this.baseUrl}/Coupon/CouponFromUser/${id_user}`);
  }

  createcoupon(coupon:Coupon){
    return this.http.post(`${this.baseUrl}/Coupon`,coupon);
  }

  confirmcopun(couponcode:string){
    return this.http.get(`${this.baseUrl}/Coupon/confirmcoupon/${couponcode}`, {responseType: 'text'});
  }
}
