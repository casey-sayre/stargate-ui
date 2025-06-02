import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalToolbar } from './global-toolbar';

describe('GlobalToolbar', () => {
  let component: GlobalToolbar;
  let fixture: ComponentFixture<GlobalToolbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalToolbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
