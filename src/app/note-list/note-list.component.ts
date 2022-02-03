import { Component, OnInit } from '@angular/core';
import {Patient} from "../data/patient";
import {HttpErrorResponse} from "@angular/common/http";
import {PatientService} from "../services/patient.service";
import {Note} from "../data/note";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public notes: Note[] = {} as Note[];
  patientId = window.history.state;

  constructor(private patientService: PatientService) { }

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

}
