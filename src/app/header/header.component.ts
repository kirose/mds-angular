import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logged:boolean=false;

  constructor(private loginService:LoginService, private router:Router) {}

  ngOnInit(): void {
  }
  public logout():void {
    this.logged = false;
    sessionStorage.clear();
    this.router.navigate(['/inicio']);
  }
}
