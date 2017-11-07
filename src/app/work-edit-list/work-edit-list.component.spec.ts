import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEditListComponent } from './work-edit-list.component';

describe('WorkEditListComponent', () => {
  let component: WorkEditListComponent;
  let fixture: ComponentFixture<WorkEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
