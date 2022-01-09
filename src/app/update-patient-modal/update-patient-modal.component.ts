import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from "../data/patient";

@Component({
  selector: 'app-update-patient-modal',
  templateUrl: './update-patient-modal.component.html',
  styleUrls: ['./update-patient-modal.component.css']
})
export class UpdatePatientModalComponent implements OnInit {

  @Input() public patient: Patient = {} as Patient;
  @Input() public my_modal_title: string | undefined;
  @Input() public my_modal_content: string | undefined;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
