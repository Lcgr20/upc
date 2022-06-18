import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user!:User;
  userid!:any;
  username!:any;
  name!:any;
  email!:any;
  dni!:any;
  edad!:any;
  num_cel!:any;

  constructor(private userservice:UserService,private router: Router) { }

  ngOnInit(): void {
    this.userid=localStorage.getItem('userid');
    if(this.userid==null){this.router.navigate(['../register']);}
    this.username=document.querySelector("#username");
    this.name=document.querySelector("#fullname");
    this.email=document.querySelector("#email");
    this.dni=document.querySelector("#dni");
    this.edad=document.querySelector("#edad");
    this.num_cel=document.querySelector("#celular");
    this.getinfouser();
  }
  
  getinfouser(){

    this.name.setAttribute('readonly', true);
    this.email.setAttribute('readonly', true);
    this.edad.setAttribute('readonly', true);
    this.num_cel.setAttribute('readonly', true);

    this.userservice.getuserid(this.userid).subscribe({
      next: (data) => {
        this.user=data;
        this.username.value=this.user.username;
        this.name.value=this.user.name;
        this.email.value=this.user.email;
        this.dni.value=this.user.dni;
        this.edad.value=this.user.age;
        this.num_cel.value=this.user.phoneNumber;
        
      },
      error: (e) => console.error(e),
    });
  }

  fullname_edit(){this.name.removeAttribute('readonly');}
  email_edit(){this.email.removeAttribute('readonly');}
  numero_celu_edit(){this.num_cel.removeAttribute('readonly');}
  edad_edit(){this.edad.removeAttribute('readonly');}

  edit_user(){
    let userrr = new User();
    userrr.age=this.edad.value;
    userrr.dni=this.dni.value;
    userrr.email=this.email.value;
    userrr.name=this.name.value;
    userrr.phoneNumber=this.num_cel.value;
    userrr.password=this.user.password;
    userrr.username=this.username.value;
    this.userservice.updateuser(this.userid,userrr).subscribe(()=>{
      this.getinfouser();
    })
    alert("Se realizaron los cambios de forma correcta");
  }

}
