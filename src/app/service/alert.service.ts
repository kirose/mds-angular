import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractService } from './abstract.service';
import { Alert } from '../model/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService extends AbstractService {
  private urlService:string = this.url+'/alert';
  constructor(protected override http: HttpClient, protected override router: Router) {
    super(router, http);
  }
  findAllInactive(): Observable<Alert[]> {
    return this.http.get<any>(this.urlService+'/findAllInactive').pipe(
      map((alerts:any) => alerts as Alert[])
    );
  }
  findAll(): Observable<Alert[]> {
    return this.http.get<any>(this.urlService+'/findAll').pipe(
      map((alerts:any) => alerts as Alert[])
    );
  }
  findById(id:string): Observable<Alert> {
    return this.http.get<any>(this.urlService+'/find/'+id).pipe(
      map((alerts:any) => alerts as Alert)
    );
  }
  update(alert:Alert): Observable<any> {
    return this.http.post<any>(this.urlService+'/update/',alert);
  }
  activete(idAlert:string, empleado:string): Observable<any> {
    return this.http.put<any>(this.urlService+'/activate',null,{params:{id:idAlert,empleado:empleado}});
  }
  insert(alert:Alert): Observable<any> {
    return this.http.put<any>(this.urlService+'/insert',alert);
  }
}
