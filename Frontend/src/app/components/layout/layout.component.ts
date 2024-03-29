import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  username!:string;
  userid!:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('userid');
  }

  cerrarsesion(){
    const ok = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (ok){
      localStorage.removeItem('userid');
      window.location.reload();
    }
  }

}
