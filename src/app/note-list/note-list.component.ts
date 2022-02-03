import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {Note} from "../data/note";
import {Patient} from "../data/patient";
import {UpdatePatientModalComponent} from "../update-patient-modal/update-patient-modal.component";
import {DeletePatientModalComponent} from "../delete-patient-modal/delete-patient-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateNoteModalComponent} from "../update-note-modal/update-note-modal.component";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public notes: Note[] = {} as Note[];
  patientId = window.history.state;
  public editNote: Note = {} as Note;
  public deleteNoteId?: number;

  constructor(private patientService: PatientService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getNotesByPatientId()
  }

  public getNotesByPatientId(): void {
    this.patientService.getNotesByPatientId(this.patientId.data).subscribe(
      (response: Note[]) => {
        this.notes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddNote() {

  }

  public onUpdateNote(note: Note): void {
    this.editNote = note;
    const modalRef = this.modalService.open(UpdateNoteModalComponent);
    modalRef.componentInstance.note = this.editNote;
    modalRef.result.then(
      (response) => {
        console.log(response);
        this.getNotesByPatientId();
      }
    );
  }

  public onDeleteNote(Id: number): void {
    /*this.deletePatientId = patientId;
    const modalRef = this.modalService.open(DeletePatientModalComponent);
    modalRef.componentInstance.patientId = this.deletePatientId;
    modalRef.result.then(
      (result) => {
        if(result === 'success') {
          console.log(result);
          this.getPatients();
        }
      }
    );*/
  }

}
