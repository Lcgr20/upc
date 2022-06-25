import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-paso2',
  templateUrl: './no-paso2.component.html',
  styleUrls: ['./no-paso2.component.css']
})
export class NoPaso2Component implements OnInit {

  userid!:any;
  dinero_recibes!:any;
  ratio!:any;
  moneda_recibes!:any;
  moneda_envias!:any;
  dinero_envias!:any;
  banco!:any;

  constructor() { }

  ngOnInit(): void {

    this.userid=localStorage.getItem('userid');
    this.dinero_recibes=localStorage.getItem('dinero_recibes');
    this.ratio=localStorage.getItem('ratio');
    this.moneda_recibes=localStorage.getItem('moneda_recibes');
    this.moneda_envias=localStorage.getItem('moneda_envias');
    this.dinero_envias=localStorage.getItem('dinero_envias');
    this.banco=localStorage.getItem('banco');

  }

  limpiar(){
    localStorage.removeItem('dinero_recibes');
    localStorage.removeItem('ratio');
    localStorage.removeItem('moneda_recibes');
    localStorage.removeItem('moneda_envias');
    localStorage.removeItem('dinero_envias');
    localStorage.removeItem('banco');
    window.location.href="/";
  }

}
