import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-alert',
  templateUrl: './dashboard-alert.component.html',
  styleUrls: ['./dashboard-alert.component.css']
})
export class DashboardAlertComponent implements OnInit {
  public alert:Alert = new Alert();
  public date:any = undefined;
  public sensores=["Mongo","Uptam","CPU","Memoria"];
  public motivos=["Mantenimineto","Solicitud Operaciones"];
  public message:string;
  public error:boolean=false;
  public saving:boolean=false;

  constructor(private alertService:AlertService, protected router: Router) { }

  ngOnInit(): void {
  }
  public save():void {
    this.saving = true;
    if (!this.alert.estatus) {
      this.alert.estatus = "1";
    }
    this.alertService.insert(this.alert)
    .pipe(
      catchError((e:any) => {
        this.saving = false;
        this.error = true;
        this.message = "Se dio de alta correctamente la alerta";
        return throwError(e);
      })
    )
    .subscribe(
      res=> {
          this.error = false;
          this.message = "Se dio de alta correctamente la alerta";
          setTimeout(() => {
              this.router.navigate(['/']);
          }, 2000);
      });
  }
}
