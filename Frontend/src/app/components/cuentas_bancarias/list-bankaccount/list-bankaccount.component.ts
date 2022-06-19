import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BankAccount } from 'src/app/models/BankAccount';
import { BankaccountService } from 'src/app/services/bankaccount.service';

@Component({
  selector: 'app-list-bankaccount',
  templateUrl: './list-bankaccount.component.html',
  styleUrls: ['./list-bankaccount.component.css']
})
export class ListBankaccountComponent implements OnInit {
  
  id_user!:number;
  bankaccounts?:BankAccount[];
  bankaccount:BankAccount=new BankAccount();
  dataSource!: MatTableDataSource<BankAccount>;
  displayedColumns: string[] = ['name', 'bankName', 'accountNumber',"moneda", 'tipoDeCuenta',"acciones"];

  constructor(private bankaccountservice: BankaccountService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id_user=1;
    this.getbankacoounts(this.id_user);
  }

  getbankacoounts(iduser:number){
    this.bankaccountservice.getbankaccounts(iduser).subscribe({
      next: (data) => {
        this.bankaccounts = data;
        this.dataSource = new MatTableDataSource(data);
      },
      error: (e) => console.error(e),
    });
    
  }

  eliminar(id: number){
    const ok = confirm("¿Estás seguro de que deseas eliminar tu cuenta bancaria?");
    if (ok){
      this.bankaccountservice.deleteBankaccount(id).subscribe(()=>{
        this.getbankacoounts(this.id_user);
      })
    }
  }
}
