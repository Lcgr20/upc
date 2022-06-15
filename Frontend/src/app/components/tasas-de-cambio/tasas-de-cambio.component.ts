import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RateforInternet } from 'src/app/models/RateforInternet';
import { TasasDeCambioService } from 'src/app/services/tasas-de-cambio.service';

@Component({
  selector: 'app-tasas-de-cambio',
  templateUrl: './tasas-de-cambio.component.html',
  styleUrls: ['./tasas-de-cambio.component.css']
})
export class TasasDeCambioComponent implements OnInit {

  rateee!:RateforInternet;
  ratio_nosotros!:number;
  moneda1!:any;
  moneda2!:any;
  linksoles!:string;
  linkdolares!:string;
  linkeuros!:string;
  img1!:any;
  img2!:any;
  mon1_cantidad!:any;
  mon2_cantidad!:any;

  constructor(private tasadecambioService: TasasDeCambioService, private router: Router) { }

  ngOnInit(): void {
    this.moneda1="PEN";
    this.moneda2="USD";
    this.linksoles="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/300px-Flag_of_Peru.svg.png";
    this.linkdolares="https://s1.significados.com/foto/american-flag-1311743-180_sm.png";
    this.linkeuros="https://c1.staticflickr.com/3/2879/33663947906_e78ae51937.jpg";
    this.img1=document.getElementById("img1");
    this.img1.src=this.linksoles;
    this.img2=document.getElementById("img2");
    this.img2.src=this.linkdolares;
  }

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

  async viewtasadecambio(){

    await this.tasadecambioService.obtenertasadecambio(this.moneda2,this.moneda1).then(data => 
      {this.rateee = data;}
    );

    this.ratio_nosotros=Number(this.rateee.info?.rate)*98/100;


    this.mon1_cantidad=document.getElementById("mon1-cantidad");
    var valor=this.mon1_cantidad.value;
    this.mon2_cantidad=document.getElementById("resultadomoneda");
    this.mon2_cantidad.value=valor*this.ratio_nosotros;
  }

}
