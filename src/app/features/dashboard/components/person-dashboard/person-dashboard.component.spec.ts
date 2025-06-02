import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDashboardComponent } from './person-dashboard.component';

describe('PersonDashboardComponent', () => {
  let component: PersonDashboardComponent;
  let fixture: ComponentFixture<PersonDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
