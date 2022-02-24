import { Component, OnInit } from '@angular/core';
import {Patient} from "../data/patient";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap"
import {UpdatePatientModalComponent} from "../update-patient-modal/update-patient-modal.component";
import {DeletePatientModalComponent} from "../delete-patient-modal/delete-patient-modal.component";
import {Router} from "@angular/router";
import {GetRiskModalComponent} from "../get-risk-modal/get-risk-modal.component";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})

export class PatientListComponent implements OnInit {

  public patients: Patient[] = {} as Patient[];
  public editPatient: Patient = {} as Patient;
  public deletePatientId?: number;
  public patientId?: number;

  constructor(private patientService: PatientService,
              private modalService: NgbModal,
              private router: Router) {}

  ngOnInit() {
    this.getPatients()
  }

  public getPatients(): void {
    this.patientService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPatient(addForm: NgForm): void {
    this.patientService.addPatient(addForm.value).subscribe(
      (response: Patient) => {
        console.log(response);
        this.getPatients();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePatient(patient: Patient): void {
    this.editPatient = patient;
    const modalRef = this.modalService.open(UpdatePatientModalComponent);
    modalRef.componentInstance.patient = this.editPatient;
    modalRef.result.then(
      (response) => {
        console.log(response);
        this.getPatients();
      }
    );
  }

  public onDeletePatient(patientId: number): void {
    this.deletePatientId = patientId;
    const modalRef = this.modalService.open(DeletePatientModalComponent);
    modalRef.componentInstance.patientId = this.deletePatientId;
    modalRef.result.then(
      (result) => {
        if(result === 'success') {
          console.log(result);
          this.getPatients();
        }
      }
    );
  }

  public onGetPatientNotes(patientId: number): void {
    this.patientId = patientId;
    this.router.navigate(['noteList'], {state: {data: this.patientId}});
  }

  public onGetRisk(patientId: number): void {
    this.patientId = patientId;
    const modalRef = this.modalService.open(GetRiskModalComponent);
    modalRef.componentInstance.patientId = this.patientId;
    modalRef.result.then(
      (result) => {
        console.log(result);
        this.getPatients();
      }
    );
  }

  public searchPatients(key: string): void {
    console.log(key);
    const results: Patient[] = [];
    for (const patient of this.patients) {
      if (patient.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || patient.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(patient);
      }
    }
    this.patients = results;
    if (results.length === 0 || !key) {
      this.getPatients();
    }
  }

}
