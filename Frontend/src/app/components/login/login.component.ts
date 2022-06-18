import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:any;
  password!:any;

  constructor(private userService:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.username=document.getElementById("username");
    this.password=document.getElementById("password");

    if(this.username.value==""||this.password.value==""){
      
    }
    else{
      this.userService.signup(this.username.value,this.password.value).subscribe({
        next: (data) => {
          console.log(data);
          if(data!="login exitoso"){
            alert(data);
          }
          
        },
        error: (e) => console.error(e),
      });
    }
  }

}
