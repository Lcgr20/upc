import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InvitationCode } from '../models/InvitationCode';

@Injectable({
  providedIn: 'root'
})
export class InvitationcodeService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getcodeinvitation(id_user:number){
    return this.http.get<InvitationCode>(`${this.baseUrl}/InvitationCode/InvitationFromUser/${id_user}`);
  }

  createcodeinvitation(codeinvitation:InvitationCode){
    return this.http.post(`${this.baseUrl}/InvitationCode`,codeinvitation);
  }

  confirminvitecode(invitationcode:string){
    return this.http.get(`${this.baseUrl}/InvitationCode/confirminvitcode/${invitationcode}`, {responseType: 'text'});
  }
  aumentarnum(id_user:number,codeinvitation:InvitationCode){
    return this.http.put(`${this.baseUrl}/InvitationCode/aumentarnuminvi/${id_user}`,codeinvitation)
  }
}
