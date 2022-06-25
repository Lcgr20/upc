import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notification } from 'src/app/models/Notification';
import { NotificationService } from 'src/app/services/notification.service';
import { MatListItem} from '@angular/material/list';


@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent implements OnInit {

  id_user!:any;
  // unread_notifications?:Notification[];
  notifications?:Notification[];
  data:any[] = [];
  unread_notifications:any[] = [];
  updated_notification:any;

  constructor(private notificationservice: NotificationService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id_user=localStorage.getItem('userid');
    if(this.id_user==null){this.router.navigate(['../register']);}
    this.getnotifications(this.id_user);
  }

  getnotifications(iduser:number) {

    this.notificationservice.getnotifications(iduser).subscribe({
      next: (response) => {
        this.notifications = response;
        this.unread_notifications = [] as any[];

        for (let n of this.notifications){
          if (n.notificationStatus == "noleido")
          {
            this.unread_notifications.push(n);
          }
        }
      },
      error: (e) => console.error(e),
    });
    
    
  }

  getnotification(id:number) {
    this.notificationservice.getnotification(id).subscribe({
      next: (data) => {
        this.updated_notification = data;
        this.updated_notification.notificationStatus = "leido";
        this.notificationservice.updatestatus(id, this.updated_notification).subscribe();
        window.location.href="/notificacion";
      }
      
    });
  }

  read_notification(id:number) {
    this.getnotification(id);
  }

}
