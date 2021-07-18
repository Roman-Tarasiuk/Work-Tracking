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
  @Input() timer: string;

  @Output() taskStart: EventEmitter<string> = new EventEmitter();
  @Output() taskStop: EventEmitter<string> = new EventEmitter();
  @Output() taskMoveUp: EventEmitter<string> = new EventEmitter();
  @Output() taskMoveDown: EventEmitter<string> = new EventEmitter();
  @Output() taskEdit: EventEmitter<string> = new EventEmitter();
  @Output() taskDelete: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  sordedByOrder(): Task[] {
    // var copy = this.tasks.slice(0, this.tasks.length);
    // return copy.sort((a: Task, b: Task) => a.order - b.order);

    return this.tasks.sort((a: Task, b: Task) => a.priority - b.priority);
  }

  ngOnInit() {
  }

  onTaskStarted(id) {
    this.taskStart.emit(id);
  }

  onTaskStopped(id) {
    this.taskStop.emit(id);
  }

  onMoveUp(id) {
    this.taskMoveUp.emit(id);
  }

  onMoveDown(id) {
    this.taskMoveDown.emit(id);
  }

  onEdit (id) {
      this.taskEdit.emit(id);
  }

  onDelete (id) {
      this.taskDelete.emit(id);
  }
}
