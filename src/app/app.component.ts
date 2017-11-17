import { Component } from '@angular/core';
import { TaskManager } from '../taskmanager.model';
import { WorkingInterval } from '../working-interval.model';
import { TimeLib } from '../time.library';

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

  timer: string;
  intervalId: number;
  intervalAutosaveId: number;
  autoSaveInterval: number = 1000 * 60 * 2.5;
  startTime: Date;

  constructor() {
    this.taskManager = new TaskManager();
  }

  addTask(id, title, priority, f) {
    this.taskManager.newTask(id, title, priority);
    f.resetForm();
    this.toggleNewTaskEditing();
  }

  startTask(id) {
    if (this.taskManager.runningTask) {
      this.taskManager.stopRunningTask(new Date());
      this.taskManager.saveData();
      this.stopTimer();
    }

    if (this.taskManager.startTask(id)) {
      this.startTimer();
      document.title = '\u25B6 ' + this.taskManager.runningTask.title + ' - ' + this.windowTitle;
    }
  }

  stopTask() {
    this.taskManager.stopRunningTask(null);
    this.stopTimer();

    document.title = '\u25A0 ' + this.windowTitle;
  }

  toggleNewTaskEditing() {
    this.newTaskEditing = !this.newTaskEditing;
  }

  toggleWorkEditing() {
    this.workEditing = !this.workEditing;
  }


  startTimer() {
    this.startTime = new Date();

    this.intervalId = window.setInterval(() => {
        var timeSpan = new Date().getTime() - this.startTime.getTime();

        this.timer = TimeLib.timeStr(timeSpan);
        var timeTitle = TimeLib.timeStrDigitalClock(timeSpan);

        document.title = '\u25B6 ' + timeTitle + ' ** ' + this.taskManager.runningTask.title + ' - ' + this.windowTitle;
    }, 1000);

    this.intervalAutosaveId = window.setInterval(() => {
      var d = new Date();
      this.taskManager.updateRunningTask(d);
      this.taskManager.saveData();
    }, this.autoSaveInterval);
  }

  stopTimer() {
    window.clearInterval(this.intervalId);
    window.clearInterval(this.intervalAutosaveId);
    
    this.timer = '';
  }

}
