import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-work-edit-list',
  templateUrl: './work-edit-list.component.html',
  styleUrls: ['./work-edit-list.component.css']
})
export class WorkEditListComponent implements OnInit {
  @Output() onDeleteWorkingInterval: EventEmitter<number> = new EventEmitter();
  @Input() task: Task;
  
  constructor() { }

  ngOnInit() {
  }

  deleteWI(i: number) {
    this.onDeleteWorkingInterval.emit(i);
  }
}
