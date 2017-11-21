import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-work-edit-item',
  templateUrl: './work-edit-item.component.html',
  styleUrls: ['./work-edit-item.component.css']
})
export class WorkEditItemComponent implements OnInit {
  @Output() onDeleteWorkingInterval: EventEmitter<number> = new EventEmitter();
  @Input() task: Task;
  
  constructor() { }

  ngOnInit() {
  }

  deleteWI(i: number) {
    this.onDeleteWorkingInterval.emit(i);
  }
}
