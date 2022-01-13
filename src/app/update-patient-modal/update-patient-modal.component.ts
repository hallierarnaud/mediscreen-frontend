import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from "../data/patient";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-patient-modal',
  templateUrl: './update-patient-modal.component.html',
  styleUrls: ['./update-patient-modal.component.css']
})
export class UpdatePatientModalComponent implements OnInit {

  @Input() public patient: Patient = {} as Patient;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) {}

  ngOnInit(): void {
  }

  public onUpdatePatient(patient: Patient): void {
    this.patientService.updatePatient(patient.id, patient).subscribe(
      (response: Patient) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
