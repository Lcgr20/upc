import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username!:any;
  name!:any;
  email!:any;
  password!:any;
  dni!:any;
  edad!:any;
  num_cel!:any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  create_user() {
    
    let userr = new User()

    this.username=document.getElementById("username");
    this.name=document.getElementById("fullname");
    this.email=document.getElementById("email");
    this.dni=document.getElementById("dni");
    this.edad=document.getElementById("edad");
    this.password=document.getElementById("password");
    this.num_cel=document.getElementById("celular");

    if(this.username.value==""||this.name.value==""||this.email.value==""||this.dni.value==""||this.edad.value==""||
    this.password.value==""||this.num_cel.value==""){
      alert("No ha completado todos los campos obligatorios para el registro de usuario");
    }
    else{
      userr.username=this.username.value;
      userr.name=this.name.value;
      userr.email=this.email.value;
      userr.dni=this.dni.value;
      userr.age=this.edad.value;
      userr.phoneNumber=this.num_cel.value;
      userr.password=this.password.value;

      this.userService.register_user(userr).subscribe(
        (response) => {
          if(response!="registro correcto"){
            alert(response);
          }
          else{
            this.router.navigate(['../login']);
          }
        },
        (_error) => {}
      );
      
    }

  }

}
