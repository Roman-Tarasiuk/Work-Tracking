import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;

  @Output() onTaskStarted: EventEmitter<string> = new EventEmitter();
  @Output() onTaskStopped: EventEmitter<string> = new EventEmitter();
  @Output() onTaskMovedUp: EventEmitter<string> = new EventEmitter();
  @Output() onTaskMovedDown: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
      if (!this.task.taskStarted) {
        this.onTaskStarted.emit(this.task.id);
      }
      else {
        this.onTaskStopped.emit(this.task.id);
      }
  }

  moveUp() {
    this.onTaskMovedUp.emit(this.task.id);
  }

  moveDown() {
    this.onTaskMovedDown.emit(this.task.id);
  }

  // #region Helper Methods

  private totalTime(): string {
    var workTime = this.task.workTime;
    var total: number = 0;

    for (var i = 0; i < workTime.length; i++) {
      if (workTime[i].end != null) {
        total += Math.abs(workTime[i].end.getTime() - workTime[i].start.getTime());
      }
    }

    return this.timeStr(total);
  }

  private timeStr(total): string {
    var oneDay = 1000 * 3600 * 24;
    var totalDays = Math.floor(total / oneDay);
    if (total >= oneDay) {
      total -= totalDays * oneDay;
    }

    var oneHour = 1000 * 3600;
    var totalHours = Math.floor(total / oneHour);
    if (total >= oneHour){
      total -= totalHours * oneHour;
    }

    var oneMinute = 1000 * 60;
    var totalMinutes = Math.floor(total / oneMinute);
    if (total >= oneMinute) {
        total -= totalMinutes * oneMinute;
    }

    var oneSecond = 1000;
    var totalSeconds = Math.floor(total / oneSecond);

    return totalDays + 'd ' + totalHours + 'h ' + totalMinutes + 'm ' + totalSeconds + 's';
  }

// #endregion
}
