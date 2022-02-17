import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from "./services/patient.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { UpdatePatientModalComponent } from './update-patient-modal/update-patient-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeletePatientModalComponent } from './delete-patient-modal/delete-patient-modal.component';
import { HomeComponent } from './home/home.component';
import { NoteListComponent } from './note-list/note-list.component';
import { UpdateNoteModalComponent } from './update-note-modal/update-note-modal.component';
import { DeleteNoteModalComponent } from './delete-note-modal/delete-note-modal.component';
import { AddNoteModalComponent } from './add-note-modal/add-note-modal.component';

const appRoutes: Routes = [
  { path: 'noteList', component: NoteListComponent },
  { path: 'patientList', component: PatientListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    HeaderComponent,
    UpdatePatientModalComponent,
    DeletePatientModalComponent,
    HomeComponent,
    NoteListComponent,
    UpdateNoteModalComponent,
    DeleteNoteModalComponent,
    AddNoteModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
