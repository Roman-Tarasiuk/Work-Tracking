import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEditItemComponent } from './work-edit-item.component';

describe('WorkEditListComponent', () => {
  let component: WorkEditItemComponent;
  let fixture: ComponentFixture<WorkEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
