import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private UserUrl = 'http://localhost:3000/User';

  constructor(private _http: HttpClient) { }

  addPatient(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/patients', data);
  }

  updatePatient(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/patients/${id}`, data);
  }

  getPatientList(): Observable<any> {
    return this._http.get('http://localhost:3000/patients');
  }

  deletePatient(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/patients/${id}`);
  }

  login(username: string, password: string): Observable<boolean> {
    return this._http.get<any[]>(this.UserUrl).pipe(
      map(User => {
        const user = User.find(u => u.username === username && u.password === password);
        return user;
      }),
      catchError(() => of(false))
    );
  }

   
}

