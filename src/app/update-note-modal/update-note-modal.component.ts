import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../data/note";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../services/patient.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrls: ['./update-note-modal.component.css']
})
export class UpdateNoteModalComponent implements OnInit {

  @Input() public note: Note = {} as Note;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) {}

  ngOnInit(): void {
  }

  public onUpdateNote(note: Note): void {
    this.patientService.updateNote(note.id, note).subscribe(
      (response: Note) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
