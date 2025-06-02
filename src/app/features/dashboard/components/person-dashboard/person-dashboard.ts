import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Observable, switchMap, BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { PersonDataService } from '../../../../core/person-data.service';
import { Person } from '../../../../core/models/person.model';
import { PersonFilterComponent } from '../person-filter/person-filter';
import { PersonGridComponent } from '../person-grid/person-grid';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'person-dashboard',
  templateUrl: './person-dashboard.html',
  styleUrls: ['./person-dashboard.css'],
  imports: [PersonFilterComponent, PersonGridComponent, AsyncPipe],
})
export class PersonDashboard implements OnInit, OnDestroy {
  private personDataService = inject(PersonDataService);
  private breakpointObserver = inject(BreakpointObserver);
  private destroyed = new Subject<void>();


  private filtersSubject = new BehaviorSubject<{ astronautsOnly: boolean }>({
    astronautsOnly: false,
  });
  filters$ = this.filtersSubject.asObservable();

  filteredPersons$: Observable<Person[]> | undefined;
  
  cols$!: Observable<number>;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([
    '(max-width: 999px)'
  ]).pipe(
    takeUntil(this.destroyed),
    map(result => result.matches)
  );

  ngOnInit() {
    this.filteredPersons$ = this.filters$.pipe(
      switchMap(filters => this.personDataService.getPersons(filters.astronautsOnly))
    );
    this.cols$ = this.isHandset$.pipe(
      map(isHandset => isHandset ? 1 : 3)
    );
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onFiltersChanged(filters: { astronautsOnly: boolean }) {
    this.filtersSubject.next(filters);
  }
}