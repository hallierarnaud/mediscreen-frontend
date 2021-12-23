import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../data/patient";
import {environment} from "../../environments/environment";

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {}

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apiBaseUrl}/patients/${id}`);
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apiBaseUrl}/patients`);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.apiBaseUrl}/patients`, patient);
  }

  public updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.apiBaseUrl}/patients/${id}`, patient);
  }

  public deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/patients/${id}`);
  }

}
