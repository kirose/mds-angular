import { TranslationWidth } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepickerI18n, NgbDateStruct, NgbPeriod } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES: { [key: string]: { [key: string]: string[]}; } = {
  'es': {
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    weekdaysFull: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
    months: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiempre', 'Octubre', 'Noviembre', 'Diciembre'],
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'es';
}

@Injectable()
export class NgbCalendarES extends NgbCalendar {
  getDaysPerWeek(): number {
    return 7;
  }
  getMonths(year?: number | undefined): number[] {
    return [1,2,3,4,5,6,7,8,10,11,12];
  }
  getWeeksPerMonth(): number {
    return 4;
  }
  getWeekday(date: NgbDate): number {
    throw new Error('Method not implemented.');
  }
  getNext(date: NgbDate, period?: NgbPeriod | undefined, number?: number | undefined): NgbDate {
    throw new Error('Method not implemented.');
  }
  getPrev(date: NgbDate, period?: NgbPeriod | undefined, number?: number | undefined): NgbDate {
    throw new Error('Method not implemented.');
  }
  getWeekNumber(week: readonly NgbDate[], firstDayOfWeek: number): number {
    throw new Error('Method not implemented.');
  }
  getToday(): NgbDate {
    throw new Error('Method not implemented.');
  }
  isValid(date?: NgbDate | null | undefined): boolean {
    throw new Error('Method not implemented.');
  }
}


@Injectable()
export class NgbDatepickerI18nES extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) {
    super();
  }

  getWeekdayLabel(weekday: number, width?: TranslationWidth | undefined): string {
    return I18N_VALUES[this._i18n.language].weekdaysFull[weekday - 1];
  }
  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].monthsFull[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}
