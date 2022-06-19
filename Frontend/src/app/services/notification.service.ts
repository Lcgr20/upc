import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getnotification(id:number){
    return this.http.get<Notification>(`${this.baseUrl}/Notification/${id}`);
  }

  getnotifications(id_user:number){
    return this.http.get<Notification[]>(`${this.baseUrl}/Notification/NotificationsFromUser/${id_user}`);
  }

  createnotification(notification:Notification){
    return this.http.post(`${this.baseUrl}/Notification`,notification);
  }

  deletenotification(id:number){
    return this.http.delete(`${this.baseUrl}/Notification/${id}`);
  }

  updatestatus(id:number, notificacion:Notification) {
    return this.http.put(`${this.baseUrl}/Notification/${id}`, notificacion);
  }
}