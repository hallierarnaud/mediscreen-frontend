import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from "./services/patient.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: 'patientList', component: PatientListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
