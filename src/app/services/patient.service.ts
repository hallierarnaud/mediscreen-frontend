import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "../data/patient";
import {environment} from "../../environments/environment";
import {Note} from "../data/note";

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {}

  public getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apiPatientUrl}/patients/${id}`);
  }

  public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${environment.apiPatientUrl}/patients`);
  }

  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${environment.apiPatientUrl}/patients`, patient);
  }

  public updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${environment.apiPatientUrl}/patients/${id}`, patient);
  }

  public deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiPatientUrl}/patients/${id}`);
  }

  public getNotesByPatientId(patientId: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${environment.apiNoteUrl}/notes/${patientId}`)
  }

  public addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${environment.apiNoteUrl}/notes`, note);
  }

  public updateNote(id: number, note: Note): Observable<Note> {
    return this.http.put<Note>(`${environment.apiNoteUrl}/notes/${id}`, note);
  }

  public deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiNoteUrl}/notes/${id}`);
  }

}
