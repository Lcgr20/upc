import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  userid!:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userid = localStorage.getItem('userid');
    if(this.userid==null){this.router.navigate(['../register']);}
  }

}
