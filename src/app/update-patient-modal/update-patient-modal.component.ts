import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../data/patient";

@Component({
  selector: 'app-update-patient-modal',
  templateUrl: './update-patient-modal.component.html',
  styleUrls: ['./update-patient-modal.component.css']
})
export class UpdatePatientModalComponent implements OnInit {

  @Input()
  public patient: Patient = {} as Patient;

  constructor() {}

  ngOnInit(): void {
  }

}
