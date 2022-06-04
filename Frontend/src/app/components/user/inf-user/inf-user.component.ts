import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inf-user',
  templateUrl: './inf-user.component.html',
  styleUrls: ['./inf-user.component.css']
})
export class InfUserComponent implements OnInit {

  users?:User[];

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getall();
  }
  
  getall():void{
    this.userservice.getAll().subscribe({
      next:(data)=>{
        this.users=data;
      },
      error:(e)=>console.error(e),
    })
  }

}
