import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../data/patient";
import {environment} from "../../environments/environment";

@Injectable()
export class PatientService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>('${this.apiServerUrl}/patients/${id}');
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('${this.apiServerUrl}/patients');
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>('${this.apiServerUrl}/patients', patient);
  }

  public updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>('${this.apiServerUrl}/patients/${id}', patient);
  }

  public deletePatient(id: number): Observable<void> {
    return this.http.delete<void>('${this.apiServerUrl}/patients/${id}');
  }

}
