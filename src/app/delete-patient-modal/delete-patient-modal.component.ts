import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-delete-patient-modal',
  templateUrl: './delete-patient-modal.component.html',
  styleUrls: ['./delete-patient-modal.component.css']
})
export class DeletePatientModalComponent implements OnInit {

  @Input() public patientId: number = {} as number;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) { }

  ngOnInit(): void {
  }

  public onDeletePatient(patientId: number): void {
    this.patientService.deletePatient(patientId).subscribe(
      (response: void) => {
        console.log(response);
        this.activeModal.close('success');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
