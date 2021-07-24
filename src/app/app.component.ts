import { Component } from '@angular/core';
import { TaskManager } from '../taskmanager.model';
import { WorkingInterval } from '../working-interval.model';
import { TimeLib } from '../time.library';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';

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

  taskDurationStr: string;
  timerEnabled: boolean = true;
  intervalTimerId: number;
  intervalAutosaveId: number;
  timerInterval: number = 1000;
  autoSaveInterval: number = 1000 * 60 * 3;

  constructor() {
    this.taskManager = new TaskManager();
  }

  // Prevent closing tab when data is not saved.
  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: any): void {
    if (!this.taskManager.isDataSaved()) {
      event.preventDefault();
      event.returnValue = false;
    }
  }

  addTask(id, title, priority, f) {
    this.taskManager.newTask(id, title, priority);
    f.resetForm();
    this.toggleNewTaskEditing();
  }

  onStartTask(id) {
    if (this.taskManager.runningTask) {
      this.stopTimer();
      this.taskManager.stopRunningTask(new Date());
      this.taskManager.saveData();
    }

    if (this.taskManager.startTask(id)) {
      this.startTimer();
      document.title = '\u25B6 00:00 ** ' + this.taskManager.runningTask.title + ' - ' + this.windowTitle;
    }
  }

  onStopTask() {
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

  saveWork() {
      var d = new Date();
      this.taskManager.updateRunningTask(d);
      this.taskManager.saveData();
  }

  startTimer() {
    this.intervalAutosaveId = window.setInterval(() => {
      this.timerEnabled = false;
      this.saveWork();
      this.timerEnabled = true;
    }, this.autoSaveInterval);

    var self = this;

    function timer() {
        if (self.timerEnabled) {
          var timeSpan = new Date().getTime() - self.taskManager.lastTaskStartTime().getTime();

          self.taskDurationStr = TimeLib.timeStr(timeSpan);
          var timeTitle = TimeLib.timeStrDigitalClock(timeSpan);

          document.title = '\u25B6 ' + timeTitle + ' ** ' + self.taskManager.runningTask.title + ' - ' + self.windowTitle;
        }
    }

    this.intervalTimerId = window.setInterval(timer, this.timerInterval);
  }

  stopTimer() {
    window.clearInterval(this.intervalTimerId);
    window.clearInterval(this.intervalAutosaveId);

    this.saveWork();

    this.taskDurationStr = '';
  }

  exportToFile() {
    this.taskManager.saveDataToFile();
  }

  async importFromFile(event) {
    this.taskManager.importFromFile(event);
  }
}
