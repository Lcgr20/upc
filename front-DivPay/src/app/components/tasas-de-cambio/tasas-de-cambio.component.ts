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
  moneda1_!:string;
  moneda2_!:string;

  constructor(private tasadecambioService: TasasDeCambioService, private router: Router) { }

  ngOnInit(): void {
  }

  async viewtasadecambio(){

    this.moneda1=document.getElementById("moneda2");
    this.moneda2=document.getElementById("moneda1");

    if(this.moneda1.value==this.moneda2.value){
      alert("No elegir el mismo tipo de moneda");
    }
    else{

      this.moneda1_=this.moneda1.value;
      this.moneda2_=this.moneda2.value;
      
      if(this.moneda1_=="Soles"){this.moneda1_="PEN"};
      if(this.moneda1_=="Dolares"){this.moneda1_="USD"};
      if(this.moneda1_=="Euros"){this.moneda1_="EUR"};

      if(this.moneda2_=="Soles"){this.moneda2_="PEN"};
      if(this.moneda2_=="Dolares"){this.moneda2_="USD"};
      if(this.moneda2_=="Euros"){this.moneda2_="EUR"};
        
      //"PEN","USD" 1USD->3.75
      await this.tasadecambioService.obtenertasadecambio(this.moneda1_,this.moneda2_).then(data => 
        {this.rateee = data;}
        );

      this.ratio_nosotros=Number(this.rateee.info?.rate)*98/100;

    }
    
  }

}
