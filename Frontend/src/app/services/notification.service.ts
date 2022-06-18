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

  createnotification(notification:Notification){
    return this.http.post(`${this.baseUrl}/Notification`,notification);
  }
}
