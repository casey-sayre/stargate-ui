import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDashboard } from './person-dashboard';

describe('PersonDashboard', () => {
  let component: PersonDashboard;
  let fixture: ComponentFixture<PersonDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
