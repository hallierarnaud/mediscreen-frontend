import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Note} from "../data/note";

@Component({
  selector: 'app-add-note-modal',
  templateUrl: './add-note-modal.component.html',
  styleUrls: ['./add-note-modal.component.css']
})
export class AddNoteModalComponent implements OnInit {

  @Input() public notePatientId: number = {} as number;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) { }

  ngOnInit(): void {
  }

  public onAddNote(notePatientId: number, note: Note): void {
    this.patientService.addNote(notePatientId, note).subscribe(
      (response: Note) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
