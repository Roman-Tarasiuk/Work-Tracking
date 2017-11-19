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
  timerEnabled: boolean = true;
  intervalTimer1Id: number;
  intervalTimer2Id: number;
  intervalAutosaveId: number;
  intervalTimer1: number = 1000;
  intervalTimer2: number = 1000 * 10;
  timer1MaxTicks: number = 10;
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
      this.stopTimer();
      this.taskManager.stopRunningTask(new Date());
      this.taskManager.saveData();
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

  saveWork() {
      var d = new Date();
      this.taskManager.updateRunningTask(d);
      this.taskManager.saveData();
  }

  startTimer() {
    this.startTime = new Date();

    this.intervalAutosaveId = window.setInterval(() => {
      this.timerEnabled = false;
      this.saveWork();
      this.timerEnabled = true;
    }, this.autoSaveInterval);

    var ticks = 0;
    var self = this;

    function timer() {
        if (self.timerEnabled) {
          var timeSpan = new Date().getTime() - self.startTime.getTime();

          self.timer = TimeLib.timeStr(timeSpan);
          var timeTitle = TimeLib.timeStrDigitalClock(timeSpan);

          document.title = '\u25B6 ' + timeTitle + ' ** ' + self.taskManager.runningTask.title + ' - ' + self.windowTitle;

          if (ticks >=0 && ticks < self.timer1MaxTicks) {
            ticks++;
          }
          else if (ticks >= self.timer1MaxTicks) {
            window.clearInterval(self.intervalTimer1Id);
            ticks = -1;
          }
        }
    }

    this.intervalTimer1Id = window.setInterval(timer, this.intervalTimer1);
    this.intervalTimer2Id = window.setInterval(timer, this.intervalTimer2);
  }

  stopTimer() {
    window.clearInterval(this.intervalTimer1Id);
    window.clearInterval(this.intervalTimer2Id);
    window.clearInterval(this.intervalAutosaveId);

    this.timer = '';
  }

}
