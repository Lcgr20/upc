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
      alert("No ha completado todos los campos obligatorios para iniciar sesión");
    }
    else{
      this.userService.login(this.username.value,this.password.value).subscribe({
        next: (data) => {
          if(data=="El usuario no existe"||data=="La contraseña es incorrecta"){
            alert(data);
          }
          else{
            localStorage.setItem('userid', data);
            window.location.href="";
          }
          
        },
        error: (e) => console.error(e),
      });
    }
  }

}
