import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css']
})
export class RecuperarContraComponent implements OnInit {

  boton!:any;
  username!:any;
  email!:any;
  num_cel!:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.boton="correo";
  }

  correo(){
    this.boton="correo";
  }
  celular(){
    this.boton="celular";
  }
  recuperar(){
    this.username=document.getElementById("username");
    this.email=document.getElementById("email");
    this.num_cel=document.getElementById("celular");
    if(this.username.value==""){}
    else{
      if(this.boton=="correo" &&this.email.value!=""){
        alert("Se ha enviado un enlace de restablecimiento de contraseña a su correo electrónico.");
        this.router.navigate(['../login']);
      }
      if(this.boton=="celular" &&this.num_cel.value!=""){
        alert("Se ha enviado un enlace de restablecimiento de contraseña a su número de teléfono.");
        this.router.navigate(['../login']);
      }
    }

  }

}
