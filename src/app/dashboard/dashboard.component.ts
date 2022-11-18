import { Component, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public alerts:Alert[];
  public message:string = 'Cargando...';
  public error:boolean=false;

  constructor(private alertService:AlertService) { }

  ngOnInit(): void {
    this.loadAlerts();
  }
  onAlertActivated(idAlert: string): void {
    console.log("Activado "+idAlert);
    this.loadAlerts();
  }
  loadAlerts(){
    this.alertService.findAllInactive()
    .pipe(
      catchError((e:any) => {
        this.error = true;
        this.message = "Ocurrio un error al consultar las alertas";
        return throwError(e);
      })
    )
    .subscribe(
      res=> {
        this.alerts = res;
        this.error = false;
        if (res.length == 0) {
          this.message = "No existen alertas";
        } else {
          this.message = '';
        }
      });
  }
}
