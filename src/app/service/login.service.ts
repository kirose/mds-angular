import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractService } from './abstract.service';
import { User } from '../model/user';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends AbstractService {
  private urlService:string = this.url+'/login';
  private _loginEvent = new EventEmitter<any>();
  constructor(protected override router: Router, protected override http: HttpClient) {
    super(router, http);
  }
  public attempt(user: User) : Observable<any> {
    return this.logingAttempt(user).pipe(tap(res => {
      sessionStorage.setItem('user', JSON.stringify(res));
      this._loginEvent.emit(res);
    }));
  }
  get loginEvent():EventEmitter<any>{
    return this._loginEvent;
  }
}
