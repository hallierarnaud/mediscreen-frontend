import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Risk} from "../data/risk";

@Component({
  selector: 'app-get-risk-modal',
  templateUrl: './get-risk-modal.component.html',
  styleUrls: ['./get-risk-modal.component.css']
})
export class GetRiskModalComponent implements OnInit {

  @Input() public patientId: number = {} as number;
  @Input() public risk: Risk = {} as Risk;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.onGetRisk(this.patientId);
  }

  public onGetRisk(patientId: number): void {
    this.patientService.getRisk(patientId).subscribe(
      (response: Risk) => {
        this.risk = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
