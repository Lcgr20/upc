import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/User`);
  }

}
