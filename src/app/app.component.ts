import { Component } from '@angular/core';
import { Task } from '../task.model';
import { WorkingInterval } from '../working-interval.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[];
  runningTask: Task = null;

  constructor() {
    this.tasks = [
      new Task(4, 'id-123', 'Home'),
      new Task(2, 'id-100500', 'TRM'),
      new Task(3, 'QAT-3456', 'TM'),
      new Task(1, 'BMRS-9876', 'BM')
    ]

    this.tasks[0].workTime.push(new WorkingInterval(
      new Date(2017, 9, 28, 10, 15),
      new Date())
    );
  }

  taskStarted(taskId) {
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

  taskStopped(taskId) {
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
}
