import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:User = new User();
  constructor(private loginService:LoginService, protected router: Router) { }

  ngOnInit(): void {
  }
  public attempt():void {
    this.loginService.attempt(this.user).subscribe(
      res=> {
          console.log(res.message);
          this.router.navigate(['/panel']);
    });
  }
}
