import { Component } from '@angular/core';
import { Task } from '../task.model';
import { WorkingInterval } from '../working-interval.model';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[];
  runningTask: Task = null;
  editing: boolean = false;

  constructor() {
    this.tasks = [
      new Task(4, 'id-0', 'Idle Time')
    ]
  }

  startTask(taskId) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        if (this.runningTask != null) {
          this.runningTask.endWork(new Date());
        }
        this.runningTask = this.tasks[i];
        this.runningTask.startWork(new Date());
        break;
      }
    }
  }

  stopTasks() {
    if (this.runningTask != null) {
      this.runningTask.endWork(new Date());
      this.runningTask = null;
    }
  }

  moveUp(taskId) {
    var index = this.findTaskIndex(taskId);

    if (index > 0) {
      var upper = this.tasks[index - 1];
      var current = this.tasks[index];
      upper.priority++;
      current.priority--;
    }
  }

  moveDown(taskId) {
    var index = this.findTaskIndex(taskId);

    if (index < (this.tasks.length - 1)) {
      var lower = this.tasks[index + 1];
      var current = this.tasks[index];
      lower.priority--;
      current.priority++;
    }
  }

  edit(taskId) {
    var index = this.findTaskIndex(taskId);

    if ((index >= 0) && (index < this.tasks.length)) {
      this.startEditing();

      // TO DO: Rest of logic.
    }
  }

  delete(taskId) {
    var index = this.findTaskIndex(taskId);

    if ((index >= 0) && (index < this.tasks.length)) {
      this.tasks.splice(index, 1);
    }
  }

  saveData() {
    if (this.runningTask != null) {
      var tmp = this.runningTask;
    }

    this.stopTasks();
    this.uploadWorkToStorage(this.tasks);

    if (tmp != null) {
      this.runningTask = tmp;
      this.runningTask.startWork(new Date());
    }
  }

  loadData() {
    this.stopTasks();
    this.tasks = this.getWorkFromStorage();
  }

  submit(f) {
    this.addTask(f.value.id, f.value.title, f.value.priority);
    f.resetForm();
    this.toggleEditing();
  }

  toggleEditing() {
    this.editing = !this.editing;
  }

  startEditing() {
    this.editing = true;
  }

  private findTask(taskId): Task {
    var foundIndex = -1;
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex > -1) {
      return this.tasks[i];
    }
    else {
      return null;
    }
  }

  private findTaskIndex(taskId): number {
    var result = -1;
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        result = i;
        break;
      }
    }

    return result;
  }

  private addTask(id: string, title: string, priority: number) {
    if (priority < 0) {
      priority = 0;
    }
    else if (priority > this.tasks.length) {
      priority = this.tasks.length;
    }

    this.tasks.splice(priority, 0, new Task(priority, id, title));
  }

  private uploadWorkToStorage(work) {
    localStorage.setItem('work',  JSON.stringify(work));
  }

  private getWorkFromStorage () {
      var wStr = localStorage.getItem('work');

      if (wStr == undefined || wStr == null) {
          console.log('getWorkFromStorage(): no data loaded.');
          return null;
      }

      var tmp: Task[] = JSON.parse(wStr);
      
      for (var i = 0; i < tmp.length; i++) {
        var timespans = tmp[i].workTime;

        for (var j = 0; j < timespans.length; j++) {
          if (timespans[j].start) {
            timespans[j].start = new Date(timespans[j].start);
          }
          if (timespans[j].end) {
            timespans[j].end = new Date(timespans[j].end);
          }
        }
      }

      var result: Task[] = new Array<Task>();

      for (var i = 0; i < tmp.length; i++) {
        result.push(new Task(tmp[i].priority, tmp[i].id, tmp[i].title, tmp[i].workTime));
      }

      return result;
  }
}
