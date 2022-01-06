import { Component, OnInit } from '@angular/core';
import {Patient} from "../data/patient";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  // @ts-ignore
  public patients: Patient[];

  constructor(private patientService: PatientService) { }

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

}
