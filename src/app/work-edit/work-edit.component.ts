import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManager } from '../../taskmanager.model';
import { Task } from '../../task.model';

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})
export class WorkEditComponent implements OnInit {
  @Output() onClose: EventEmitter<{}> = new EventEmitter();
  @Input() taskManager: TaskManager;

  constructor() { }

  ngOnInit() {
  }

  delete(task: Task, i: number) {
    this.taskManager.deleteWork(task.id, i);
  }

  close() {
    this.onClose.emit();
  }
}
