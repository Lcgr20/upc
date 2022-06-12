import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  users?:User[];

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall():void{
    
  }

}
