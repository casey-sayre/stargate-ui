import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PersonDataService } from '../../../../core/person-data.service';
import { Person } from '../../../../core/models/person.model';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrl: './person-dashboard.component.css',
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PersonDashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private personDataService = inject(PersonDataService);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches)
  );

  cols$: Observable<number> = this.isHandset$.pipe(
    map(isHandset => isHandset ? 1 : 2)
  );

  persons$: Observable<Person[]> | undefined;

  ngOnInit(): void {
    this.persons$ = this.personDataService.getPersons();
  }
}
