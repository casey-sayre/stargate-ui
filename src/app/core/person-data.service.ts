// person-data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from './models/person.model';
import { BaseResponse } from './models/base-response.model';

interface ApiResponse extends BaseResponse {
  people: Person[];
}

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private apiUrl = 'https://localhost:7204/Person';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => response.success ? response.people : [])
    );
  }
}
