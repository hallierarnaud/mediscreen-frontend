import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from "./services/patient.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: 'patientList', component: PatientListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
