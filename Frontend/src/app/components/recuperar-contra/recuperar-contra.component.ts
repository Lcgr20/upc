import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService:UserService,private router: Router) { }

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
    if(this.username.value==""){alert("No ha ingresado su nombre de usuario");}
    else{
      if(this.boton=="correo" &&this.email.value==""){alert("No ha ingresado su correo electrónico");}
      if(this.boton=="celular" &&this.num_cel.value==""){alert("No ha ingresado su número de teléfono");}

      if(this.boton=="correo" &&this.email.value!=""){
        this.userService.recuemail(this.username.value,this.email.value).subscribe({
          next: (data) => {
            if(data!="recuperacion exitosa"){
              alert(data);
            }
            else{
              alert("Se ha enviado un enlace de restablecimiento de contraseña a su correo electrónico.");
              this.router.navigate(['../login']);
            }
          },
        });
      }
      if(this.boton=="celular" &&this.num_cel.value!=""){
        this.userService.recucelu(this.username.value,this.num_cel.value).subscribe({
          next: (data) => {
            if(data!="recuperacion exitosa"){
              alert(data);
            }
            else{
              alert("Se ha enviado un enlace de restablecimiento de contraseña a su número de teléfono.");
              this.router.navigate(['../login']);
            }
          },
        });
      }
    }

  }

}
