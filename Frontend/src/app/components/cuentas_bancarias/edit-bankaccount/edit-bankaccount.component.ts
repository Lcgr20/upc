import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from 'src/app/models/BankAccount';
import { BankaccountService } from 'src/app/services/bankaccount.service';

@Component({
  selector: 'app-edit-bankaccount',
  templateUrl: './edit-bankaccount.component.html',
  styleUrls: ['./edit-bankaccount.component.css']
})
export class EditBankaccountComponent implements OnInit {

  name!:any;
  bankname!:any;
  accountnumber!:any;
  moneda!:any;
  tipodecuenta!:any;
  userid!:any;

  bankaccountid!:any;
  curraccount:any;

  constructor(private bankaccount: BankaccountService, private router: Router) { }

  ngOnInit(): void {
    this.bankaccountid=this.router.url.split("/")[this.router.url.split("/").length-1];
    this.bankaccountid = parseInt(this.bankaccountid)
    this.get_bankaccount(this.bankaccountid)
    
    this.name=document.getElementById("nombrecuenta");
    this.bankname=document.getElementById("banco");
    this.accountnumber=document.getElementById("num_cuenta");
    this.moneda=document.getElementById("moneda");
    this.tipodecuenta=document.getElementById("tipo_de_cuenta");
  }

  corriente_option(){this.tipodecuenta.value="Corriente";}
  ahorro_option(){this.tipodecuenta.value="Ahorro";}
  bcp_option(){this.bankname.value="BCP";}
  interbank_option(){this.bankname.value="Interbank";}
  bbva_option(){this.bankname.value="BBVA";}
  scotiabank_option(){this.bankname.value="Scotiabank";}
  pichincha_option(){this.bankname.value="Pichincha";}
  falabella_option(){this.bankname.value="Falabella";}
  ripley_option(){this.bankname="Ripley";}
  pen_option(){this.moneda.value="Soles";}
  usd_option(){this.moneda.value="Dólares";}
  eur_option(){this.moneda.value="Euros";}

  get_bankaccount(id:number){
    this.bankaccount.getbankaccount(id).subscribe({
      next: (data) => {
        this.curraccount = data;
        this.name.value = this.curraccount.name;
        this.bankname.value = this.curraccount.bankName;
        this.accountnumber.value = this.curraccount.accountNumber;
        this.moneda.value = this.curraccount.moneda;
        this.tipodecuenta.value = this.curraccount.tipoDeCuenta;
      },
      error: (e) => console.error(e),
    });
  }

  edit_bankaccount(){
    let updated_bankaccount = new BankAccount();
    if(this.name.value==""||this.bankname.value==""||this.moneda.value==""||this.tipodecuenta.value=="" || this.accountnumber.value.length==""){
      
    }
    else{

      if(this.accountnumber.value.length<13){
        alert("El número de cuenta ingresado no tiene la cantidad correcta de dígitos");
      }
      else {
        updated_bankaccount.name=this.name.value;
        updated_bankaccount.bankName=this.bankname.value;
        updated_bankaccount.accountNumber=this.accountnumber.value;
        updated_bankaccount.moneda=this.moneda.value;
        updated_bankaccount.tipoDeCuenta	=this.tipodecuenta.value;
  
        console.log("dsdsd");
        this.bankaccount.updatebankaccount(this.bankaccountid, updated_bankaccount).subscribe();
   
        this.router.navigate(['/BankAccount']);

        alert("Se realizaron los cambios de forma correcta");
      }
      
    }
  }
}
