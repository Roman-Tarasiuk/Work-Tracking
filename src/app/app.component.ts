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
  workEditing: boolean = false;

  constructor() {
    this.taskManager = new TaskManager();
  }

  toggleWorkEditing() {
    this.workEditing = !this.workEditing;
  }
}
