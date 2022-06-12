import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from 'src/app/models/BankAccount';
import { BankaccountService } from 'src/app/services/bankaccount.service';

@Component({
  selector: 'app-new-bankaccount',
  templateUrl: './new-bankaccount.component.html',
  styleUrls: ['./new-bankaccount.component.css']
})
export class NewBankaccountComponent implements OnInit {

  name!:any;
  bankname!:any;
  accountnumber!:any;
  moneda!:any;
  tipodecuenta!:any;
  
  userid!:any;

  constructor(private bankaccount: BankaccountService, private router: Router) { }

  ngOnInit(): void {
  }

  create_bankaccount(){

    let bankaccount = new BankAccount();

    this.name=document.getElementById("nombrecuenta");
    this.bankname=document.getElementById("banco");
    this.accountnumber=document.getElementById("num_cuenta");
    this.moneda=document.getElementById("moneda");
    this.tipodecuenta=document.getElementById("tipo_de_cuenta");

    if(this.name.value==""||this.bankname.value==""||this.moneda.value==""||this.tipodecuenta.value==""){
      if(this.accountnumber.value.length<13){
        alert("El número de cuenta ingresado no tiene la cantidad correcta de dígitos");
      }

    }
    else{
      bankaccount.name=this.name.value;
      bankaccount.bankName=this.bankname.value;
      bankaccount.accountNumber=this.accountnumber.value;
      bankaccount.moneda=this.moneda.value;
      bankaccount.tipoDeCuenta	=this.tipodecuenta.value;

      bankaccount.UserId=1;

      this.bankaccount.createbankaccount(bankaccount).subscribe(
        (response) => {
        },
        (_error) => {}
      );

      this.router.navigate(['/BankAccount']);
    }

  }

}
