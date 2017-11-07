import { Component, OnInit, Input } from '@angular/core';
import { TaskManager } from '../../taskmanager.model';
import { Task } from '../../task.model';

@Component({
  selector: 'app-work-edit-list',
  templateUrl: './work-edit-list.component.html',
  styleUrls: ['./work-edit-list.component.css']
})
export class WorkEditListComponent implements OnInit {
  @Input() taskManager: TaskManager;

  constructor() { }

  ngOnInit() {
  }

  delete(task: Task, i: number) {
    this.taskManager.deleteWork(task.id, i);
  }

}
