import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankaccountService } from 'src/app/services/bankaccount.service';

@Component({
  selector: 'app-list-bankaccount',
  templateUrl: './list-bankaccount.component.html',
  styleUrls: ['./list-bankaccount.component.css']
})
export class ListBankaccountComponent implements OnInit {
  
  

  constructor(private bankaccount: BankaccountService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
