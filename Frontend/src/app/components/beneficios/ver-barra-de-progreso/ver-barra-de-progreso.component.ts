import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { InvitationCode } from 'src/app/models/InvitationCode';
import { CouponService } from 'src/app/services/coupon.service';
import { InvitationcodeService } from 'src/app/services/invitationcode.service';

@Component({
  selector: 'app-ver-barra-de-progreso',
  templateUrl: './ver-barra-de-progreso.component.html',
  styleUrls: ['./ver-barra-de-progreso.component.css']
})
export class VerBarraDeProgresoComponent implements OnInit {

  numInvitados!:any;
  numInvitados_barra!:any;
  barraprogre!:any;
  codigo_invi!:any;
  invitationcode!:InvitationCode;
  couponn!:Coupon;
  id_userr!:number;

  constructor(private invitationcodeservice: InvitationcodeService,private couponservice: CouponService) { }

  ngOnInit(): void {
    this.id_userr=1;
    this.getorcreate(this.id_userr);
  }

  botoncopiar(){
    alert("Se ha copiado su código");
  }

  getorcreate(iduser:number){
    this.getinvitatoncode(iduser);
    if(this.invitationcode==null){
      this.createeinvitationcode();
    }
  }

  getinvitatoncode(iduser:number){
    this.invitationcodeservice.getcodeinvitation(iduser).subscribe({
      next: (data) => {
        this.invitationcode = data;
        this.numInvitados=this.invitationcode.numInvitados;
        this.codigo_invi=this.invitationcode.inviteCode;
        this.numInvitados_barra=this.numInvitados*10;
      },
      error: (e) => console.error(e),
    });
  }

  createeinvitationcode(){
    var invitattioncode = new InvitationCode();
    var cod = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      cod += str.charAt(char)
    }
    invitattioncode.inviteCode=cod;
    invitattioncode.numInvitados=0;
    invitattioncode.userId=this.id_userr;
    this.invitationcodeservice.createcodeinvitation(invitattioncode).subscribe(
      (response) => {
      },
      (_error) => {}
    );
  }

  /////////

  getcoupon(iduser:number){
    this.couponservice.getcoupon(iduser).subscribe({
      next: (data) => {
        this.couponn = data;
        console.log(this.couponn);
      },
      error: (e) => console.error(e),
    });
  }

  createecoupon(){
    var couponnn = new Coupon();
    var cod = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 1; i <= 8; i++) {
      var char = Math.floor(Math.random()
                  * str.length + 1);
        
      cod += str.charAt(char)
    }
    couponnn.couponCode=cod;
    couponnn.discount=2;
    couponnn.userId=this.id_userr;

    this.couponservice.createcoupon(couponnn).subscribe(
      (response) => {
      },
      (_error) => {}
    );
  }

  /////////

  reclamarcupon(){
    if(this.numInvitados==0){
      this.getcoupon(this.id_userr);
      if(this.couponn==null){
        this.createecoupon();
      }
    }
    else{
      alert("Todavía no ha completado con los requisitos solicitados");
    }
  }

}
