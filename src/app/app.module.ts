import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardAlertComponent } from './dashboard-alert/dashboard-alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import * as $ from 'jquery';
import { ModalConfirmationComponent, SwitchConfirmationComponent } from './modal-confirmation/modal-confirmation.component';



const routes: Routes = [
  {path:'', redirectTo: '/panelHistoricos', pathMatch: 'full'},
  {path:'panelHistoricos', component: DashboardComponent},
  {path:'panelAltaReglas', component: DashboardAlertComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    DashboardAlertComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    ModalConfirmationComponent,
    SwitchConfirmationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CommonModule,
    HttpClientModule,

    ReactiveFormsModule,
    NKDatetimeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
