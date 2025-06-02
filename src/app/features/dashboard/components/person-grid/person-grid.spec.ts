import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonGridComponent } from './person-grid';

describe('PersonDashboard', () => {
  let component: PersonGridComponent;
  let fixture: ComponentFixture<PersonGridComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
