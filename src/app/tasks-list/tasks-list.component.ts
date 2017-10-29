import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../task.model';
import { WorkingInterval } from '../../working-interval.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input() tasks: Task[];

  @Output() onTaskStarted: EventEmitter<string> = new EventEmitter();
  @Output() onTaskStopped: EventEmitter<string> = new EventEmitter();
  @Output() onTaskMovedUp: EventEmitter<string> = new EventEmitter();
  @Output() onTaskMovedDown: EventEmitter<string> = new EventEmitter();
  @Output() onTaskEdit: EventEmitter<string> = new EventEmitter();
  @Output() onTaskDelete: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  sordedByOrder(): Task[] {
    // var copy = this.tasks.slice(0, this.tasks.length);
    // return copy.sort((a: Task, b: Task) => a.order - b.order);

    return this.tasks.sort((a: Task, b: Task) => a.priority - b.priority);
  }

  ngOnInit() {
  }

  taskStarted(id) {
    this.onTaskStarted.emit(id);
  }

  taskStopped(id) {
    this.onTaskStopped.emit(id);
  }

  moveUp(id) {
    this.onTaskMovedUp.emit(id);
  }

  moveDown(id) {
    this.onTaskMovedDown.emit(id);
  }

  edit (id) {
      this.onTaskEdit.emit(id);
  }

  delete (id) {
      this.onTaskDelete.emit(id);
  }
}
