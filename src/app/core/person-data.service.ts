// person-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from './models/person.model';
import { BaseResponse } from './models/base-response.model';
import { environment } from '../../environments/environment';

interface ApiResponse extends BaseResponse {
  people: Person[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private apiUrl = `${environment.apiUrl}/Person`;

  constructor(private http: HttpClient) { }

  getPersons(astronautsOnly: boolean): Observable<Person[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.success ? response.people : []),
      map(persons => {
        return persons.filter(person => !astronautsOnly || person.currentDutyTitle !== '');
      })
    );
  }
}
