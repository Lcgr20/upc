import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  register_user(user: User){
    return this.http.post(`${this.baseUrl}/User`,user, {responseType: 'text'});
  }

  getuserid(id_user:number){
    return this.http.get<User>(`${this.baseUrl}/User/${id_user}`);
  }

  updateuser(id_user:number,user: User){
    return this.http.put(`${this.baseUrl}/User/${id_user}`,user);
  }

  signup(usuario:string,contra:string){
    return this.http.get(`${this.baseUrl}/User/signup/${usuario}/${contra}`, {responseType: 'text'});
  }

  recuemail(usuario:string,email:string){
    return this.http.get(`${this.baseUrl}/User/recupcontraemail/${usuario}/${email}`, {responseType: 'text'});
  }

  recucelu(usuario:string,numcel:number){
    return this.http.get(`${this.baseUrl}/User/recupcontracelu/${usuario}/${numcel}`, {responseType: 'text'});
  }

}
