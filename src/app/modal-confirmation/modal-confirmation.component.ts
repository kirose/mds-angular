import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../service/alert.service';
import { Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent implements OnInit {
  @Input() idAlert:string;
  @Input() alertActivation:EventEmitter<string>;
  public empleado:string;
  public error:boolean;
  public message:string;
  public saving:boolean = false;
	constructor(public activeModal: NgbActiveModal, private alertService: AlertService) {}
  ngOnInit(): void {
  }
  activate() {
    this.saving = true;
    this.alertService.activete(this.idAlert, this.empleado)
    .pipe(
      catchError((e:any) => {
        this.saving = false;
        this.error = true;
        this.message = "Ocurrio un error al activar la alerta";
        return throwError(e);
      })
    )
    .subscribe(
      res=> {
        this.error = false;
        this.alertActivation.emit(this.idAlert);
        this.activeModal.close('Yes');
      });
  }
  cancel(){
    this.activeModal.close('Cancel');
  }
}

@Component({
	selector: 'app-switch-confirmation',
	template: `
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" (click)="open($event)">
  </div>
	`,
})
export class SwitchConfirmationComponent {
  @Input() idAlert:string;
  @Output() alertActivation = new EventEmitter<string>();
	constructor(private modalService: NgbModal) {}
  open(e:Event) {
    e.preventDefault();
    const modalRef = this.modalService.open(ModalConfirmationComponent, {centered:true});
    modalRef.componentInstance.idAlert = this.idAlert;
    modalRef.componentInstance.alertActivation = this.alertActivation;
	}
}
