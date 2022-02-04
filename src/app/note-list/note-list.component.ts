import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {Note} from "../data/note";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateNoteModalComponent} from "../update-note-modal/update-note-modal.component";
import {DeleteNoteModalComponent} from "../delete-note-modal/delete-note-modal.component";
import {NgForm} from "@angular/forms";

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

  public onAddNote(addForm: NgForm): void {
    this.patientService.addNote(addForm.value).subscribe(
      (response: Note) => {
        console.log(response);
        this.getNotesByPatientId();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
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

  public onDeleteNote(noteId: number): void {
    this.deleteNoteId = noteId;
    const modalRef = this.modalService.open(DeleteNoteModalComponent);
    modalRef.componentInstance.noteId = this.deleteNoteId;
    modalRef.result.then(
      (result) => {
        if(result === 'success') {
          console.log(result);
          this.getNotesByPatientId();
        }
      }
    );
  }

}
