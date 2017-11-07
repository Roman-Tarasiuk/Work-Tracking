import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingIntervalComponent } from './working-interval.component';

describe('WorkingIntervalComponent', () => {
  let component: WorkingIntervalComponent;
  let fixture: ComponentFixture<WorkingIntervalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingIntervalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
