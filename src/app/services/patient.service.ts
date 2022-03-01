import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../data/patient";
import {environment} from "../../environments/environment";
import {Note} from "../data/note";
import {Risk} from "../data/risk";

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {}

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apisUrl}/patients/${id}`);
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apisUrl}/patients`);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.apisUrl}/patients`, patient);
  }

  public updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.apisUrl}/patients/${id}`, patient);
  }

  public deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apisUrl}/patients/${id}`);
  }

  public getNotesByPatientId(patientId: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apisUrl}/notes/${patientId}`)
  }

  public addNote(patientId: number, note: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.apisUrl}/notes/${patientId}`, note);
  }

  public updateNote(id: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${environment.apisUrl}/notes/${id}`, note);
  }

  public deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apisUrl}/notes/${id}`);
  }

  public getRisk(patientId: number): Observable<Risk> {
    return this.http.get<Risk>(`${environment.apisUrl}/risks/${patientId}`)
  }

}
