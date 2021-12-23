import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import {PatientService} from "./services/patient.service";

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
