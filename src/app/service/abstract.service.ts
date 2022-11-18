import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router} from '@angular/router';
import { of, Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from '../../environments/environment';

export abstract class AbstractService {
  public token: string | undefined;
  public csrfToken: string | undefined;
  protected url:string = environment.url;
  protected urlLogin:string = environment.url+"/login";
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(protected router: Router, protected http: HttpClient){}

  protected getHeader() {
    let token = this.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  protected isNotAuthorized(e:any): boolean {
    if (e.status == 401) {

      //if (this.authService.isAuthenticated()) {
        //this.authService.logout();
      //}
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status == 403) {
      //swal.fire('Acceso denegado', `${this.authService.usuario.username} no tiene acceso a este recurso`, 'warning');
      this.router.navigate(['/inicio']);
      return true;
    }
    return false;
  }
  public logingAttempt(user: User) : Observable<any> {
    return this.http.post<any>(`${this.urlLogin}/attempt`, user, {headers: this.getHeader()}).pipe(
      catchError((e:any) => {
        if (this.isNotAuthorized(e)) {
          return throwError(e);
        }
        this.router.navigate(['/inicio']);
        console.error(e.error.message);
        //swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }
  init(): void {
    console.log("CSRF Initialize");
    this.getToken().subscribe(res=> {
      var token = res.token;
      console.log('Token:'+token);
      sessionStorage.setItem('X-CSRF-TOKEN', token);
    });
  }
  getToken() : Observable<any> {
    return this.http.get<any>(this.url+'/csrf/token');
  }
}
