import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/models/Coupon';
import { Notification } from 'src/app/models/Notification';
import { InvitationCode } from 'src/app/models/InvitationCode';
import { CouponService } from 'src/app/services/coupon.service';
import { InvitationcodeService } from 'src/app/services/invitationcode.service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

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
  id_userr!:any;
  cupon_codigo!:string;

  temp!:string;

  constructor(private invitationcodeservice: InvitationcodeService,private couponservice: CouponService
    ,private notifactionservice:NotificationService,private router: Router) { }

  ngOnInit(): void {
    this.id_userr=localStorage.getItem('userid');
    if(this.id_userr==null){this.router.navigate(['../register']);}
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
    this.numInvitados=0;
    this.codigo_invi=cod;
    this.numInvitados_barra=0;
  }

  /////////

  getcoupon(iduser:number){
    this.couponservice.getcoupon(iduser).subscribe({
      next: (data) => {
        this.couponn = data;
        alert("tu Cupón: "+this.couponn.couponCode);
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
    this.cupon_codigo=cod;
    couponnn.couponCode=cod;
    couponnn.discount=2;
    couponnn.userId=this.id_userr;

    this.couponservice.createcoupon(couponnn).subscribe(
      (response) => {
        alert("tu Cupón: "+cod);
      },
      (_error) => {}
    );
  }

  /////////

  createnotification(){
    var notifiaccion = new Notification();
    notifiaccion.title="TU CUPÓN DE DIVPAY";
    notifiaccion.description="Su cupón de descuento es : ' "+this.cupon_codigo+" ' , recuerda utilizarlo al momento de comprar divisas.";
    notifiaccion.notificationStatus="noleido";
    notifiaccion.notificationType="Cupon";
    notifiaccion.userId=this.id_userr;
    let date = new Date();
    notifiaccion.date=date.toISOString().split('T')[0]+"T"+date.toISOString().split('T')[1];
    console.log(notifiaccion);
    this.notifactionservice.createnotification(notifiaccion).subscribe(
      (response) => {
      },
      (_error) => {}
    );
  }

  reclamarcupon(){
    if(this.numInvitados==0){
      this.getcoupon(this.id_userr);
      if(this.couponn==null){
        this.createecoupon();
        this.createnotification();
      }
    }
    else{
      alert("Todavía no ha completado con los requisitos solicitados");
    }
  }

}
