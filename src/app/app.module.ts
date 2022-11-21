import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerI18n, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardAlertComponent } from './dashboard-alert/dashboard-alert.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import * as $ from 'jquery';
import { ModalConfirmationComponent, SwitchConfirmationComponent } from './modal-confirmation/modal-confirmation.component';
//import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
//import { Ng2DatetimePickerModule } from 'ng2-datetime-picker/dist/ng2-datetime-picker.module';
import { DateTimePickerComponent } from "./date-time-picker/date-time-picker.component";
import { I18n, NgbDatepickerI18nES } from './date-time-picker/date-time-picker.locale.es';
//import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
//import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
//import { far } from '@fortawesome/free-regular-svg-icons';

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
    SwitchConfirmationComponent,
    DateTimePickerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    CommonModule,
    HttpClientModule,

    ReactiveFormsModule//,
    //FontAwesomeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    //{provide: NgbCalendar, useClass: NgbCalendarHebrew},
    //{provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nES}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
//  constructor(library: FaIconLibrary) {
//    library.addIcons(faClock, faCalendar);
//    library.addIconPacks(far);
//  }
}
