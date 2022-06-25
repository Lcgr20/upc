import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from 'src/app/models/BankAccount';
import { ExchangeRate } from 'src/app/models/ExchangeRate';
import { RateforInternet } from 'src/app/models/RateforInternet';
import { BankaccountService } from 'src/app/services/bankaccount.service';
import { CouponService } from 'src/app/services/coupon.service';
import { InvitationcodeService } from 'src/app/services/invitationcode.service';
import { TasasDeCambioService } from 'src/app/services/tasas-de-cambio.service';

@Component({
  selector: 'app-no-paso1',
  templateUrl: './no-paso1.component.html',
  styleUrls: ['./no-paso1.component.css']
})
export class NoPaso1Component implements OnInit {

  bankname!:any;
  moneda1!:any;
  moneda2!:any;
  linksoles!:string;
  linkdolares!:string;
  linkeuros!:string;
  img1!:any;
  img2!:any;
  accountnumber!:any;
  couponnn!:any;
  rateee!:RateforInternet;
  ratio_nosotros!:number;
  mon1_cantidad!:any;
  mon2_cantidad!:any;
  userid!:any;
  codigodeapoyoid!:any;
  cuentasbancarias:any[] = [];

  constructor(private tasadecambioService: TasasDeCambioService,private router: Router,private couponservice:CouponService,
    private invitationcodeservice:InvitationcodeService, private bankaccountservice:BankaccountService) { }

  ngOnInit(): void {
    this.codigodeapoyoid="";
    this.userid=localStorage.getItem('userid');
    this.moneda1="PEN";
    this.moneda2="USD";
    this.linksoles="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/300px-Flag_of_Peru.svg.png";
    this.linkdolares="https://s1.significados.com/foto/american-flag-1311743-180_sm.png";
    this.linkeuros="https://c1.staticflickr.com/3/2879/33663947906_e78ae51937.jpg";
    this.img1=document.getElementById("img1");
    this.img1.src=this.linksoles;
    this.img2=document.getElementById("img2");
    this.img2.src=this.linkdolares;
    this.bankname=document.getElementById("banco");
    this.bankname.value="BCP";
    this.accountnumber=document.getElementById("num_cuenta");
    this.couponnn=document.getElementById("coupoun");
    this.mon1_cantidad=document.getElementById("mon1-cantidad");
    this.mon2_cantidad=document.getElementById("resultadomoneda");
    this.get_bankaccounts();
  }

  bcp_option(){this.bankname.value="BCP";}
  interbank_option(){this.bankname.value="Interbank";}
  bbva_option(){this.bankname.value="BBVA";}
  scotiabank_option(){this.bankname.value="Scotiabank";}
  pichincha_option(){this.bankname.value="Pichincha";}
  falabella_option(){this.bankname.value="Falabella";}
  ripley_option(){this.bankname="Ripley";}

  moned1_sol(){
    if(this.moneda2=="PEN"){}
    else{this.moneda1="PEN";this.img1.src=this.linksoles;}
  }
  moned1_dol(){
    if(this.moneda2=="USD"){}
    else{this.moneda1="USD";this.img1.src=this.linkdolares;}
  }
  moned1_eur(){
    if(this.moneda2=="EUR"){}
    else{this.moneda1="EUR";this.img1.src=this.linkeuros;}
  }
  moned2_sol(){
    if(this.moneda1=="PEN"){}
    else{this.moneda2="PEN";this.img2.src=this.linksoles;}
  }
  moned2_dol(){
    if(this.moneda1=="USD"){}
    else{this.moneda2="USD";this.img2.src=this.linkdolares;}
  }
  moned2_eur(){
    if(this.moneda1=="EUR"){}
    else{this.moneda2="EUR";this.img2.src=this.linkeuros;}
  }

  async convertir(){

    await this.tasadecambioService.obtenertasadecambio(this.moneda2,this.moneda1).then(data => 
      {this.rateee = data;}
    );

    this.ratio_nosotros=Number(this.rateee.info?.rate)*98/100;


    if(this.mon1_cantidad.value==""){this.mon1_cantidad.value="1";}
    var valor=this.mon1_cantidad.value;
    this.mon2_cantidad.value=valor*this.ratio_nosotros;
  }

  siguienteee(){
    if(this.mon2_cantidad.value==""){
      alert("Ingresar el dinero a enviar y darle click en Converir con la moneda que quieras recibir, antes de darle siguiente");
    }
    else{
      alert("Se inició el proceso");
      this.bankaccountservice.getbankaccounts(this.userid).subscribe({
        next: (data) => {
              localStorage.setItem('banco', this.bankname.value);
              localStorage.setItem('moneda_envias', this.moneda1);
              localStorage.setItem('moneda_recibes', this.moneda2);
              localStorage.setItem('dinero_envias', this.mon1_cantidad.value);
              localStorage.setItem('dinero_recibes', this.mon2_cantidad.value);
              localStorage.setItem('ratio', this.ratio_nosotros.toString());
              localStorage.setItem('cuponapoyouser', this.codigodeapoyoid);

              window.location.href="/nueva-operacion/paso2";
        }
      });

      
    }
  }

  aplicarcupon(){
    this.invitationcodeservice.confirminvitecode(this.couponnn.value).subscribe({
      next: (data) => {
        if(data=="No existe"){
          this.couponservice.confirmcopun(this.couponnn.value).subscribe({
            next: (data2) => {
              if(data2=="No existe"){
                alert("El cupón ingresado no existe");
              }
              else{
                if(this.mon2_cantidad.value==""){
                  alert("Para aplicar el cupón primero debes ingresar la cantidad de dinero a enviar y darle click en convertir");
                }
                else{
                  this.ratio_nosotros=Number(this.rateee.info?.rate)*102/100;
                  var valor=this.mon1_cantidad.value;
                  this.mon2_cantidad.value=valor*this.ratio_nosotros;
                }
              }
            }
          });
        }
        else{
          
          if(data==this.userid.toString()){
            alert("No puedes usar tu mismo codigo de invitación");
          }
          else{
            alert("Si termina esta operación apoyará al que le brindo este código");
            this.codigodeapoyoid=data;
          }
        }
      }
    });
  }

  get_bankaccounts(){
    this.bankaccountservice.getbankaccounts(this.userid).subscribe({
      next: (data) => {
        this.cuentasbancarias = data;
      }
    });
  }

  a(i:BankAccount){
    this.accountnumber.value=i.accountNumber?.toString();
  }

}
