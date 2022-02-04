import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-delete-note-modal',
  templateUrl: './delete-note-modal.component.html',
  styleUrls: ['./delete-note-modal.component.css']
})
export class DeleteNoteModalComponent implements OnInit {

  @Input() public noteId: number = {} as number;

  constructor(public activeModal: NgbActiveModal,
              private patientService: PatientService) { }

  ngOnInit(): void {
  }

  public onDeleteNote(noteId: number): void {
    this.patientService.deleteNote(noteId).subscribe(
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
