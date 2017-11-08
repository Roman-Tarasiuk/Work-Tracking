import { Component } from '@angular/core';
import { TaskManager } from '../taskmanager.model';
import { WorkingInterval } from '../working-interval.model';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskManager: TaskManager;
  newTaskEditing: boolean = false;
  workEditing: boolean = false;
  windowTitle: string = 'Work Tracking';

  constructor() {
    this.taskManager = new TaskManager();
  }

  addTask(id, title, priority, f) {
    this.taskManager.newTask(id, title, priority);
    f.resetForm();
    this.toggleNewTaskEditing();
  }

  startTask(id) {
    this.taskManager.startTask(id);

    document.title = this.taskManager.getTaskTitle(id) + ' - ' + this.windowTitle;
  }

  stopTask() {
    this.taskManager.stopRunningTask(null);

    document.title = this.windowTitle;
  }

  toggleNewTaskEditing() {
    this.newTaskEditing = !this.newTaskEditing;
  }

  toggleWorkEditing() {
    this.workEditing = !this.workEditing;
  }
}
