import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../task.model';
import { TimeLib } from '../../time.library';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() timer: string;

  @Output() taskStart: EventEmitter<string> = new EventEmitter();
  @Output() taskStop: EventEmitter<string> = new EventEmitter();
  @Output() taskMoveUp: EventEmitter<string> = new EventEmitter();
  @Output() taskMoveDown: EventEmitter<string> = new EventEmitter();
  @Output() taskEdit: EventEmitter<string> = new EventEmitter();
  @Output() taskDelete: EventEmitter<string> = new EventEmitter();

  isActive: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleStartStop(event) {
      if (this.task.started) {
        this.taskStop.emit(this.task.id);
        this.isActive = true;
      }
      else {
        this.taskStart.emit(this.task.id);
        this.isActive = false;
      }

      event.stopPropagation();
  }

  toggleActive(event) {
      this.isActive = !this.isActive;
      event.stopPropagation();
  }

  moveUp(event) {
    this.taskMoveUp.emit(this.task.id);
    event.stopPropagation();
  }

  moveDown(event) {
    this.taskMoveDown.emit(this.task.id);
    event.stopPropagation();
  }

  edit (event) {
      this.taskEdit.emit(this.task.id);
      event.stopPropagation();
  }

  delete (event) {
      this.taskDelete.emit(this.task.id);
      event.stopPropagation();
  }

  totalTime(): string {
    var workTime = this.task.workTime;
    var total: number = 0;

    for (var i = 0; i < workTime.length; i++) {
      if (workTime[i].end != null) {
        total += Math.abs(workTime[i].end.getTime() - workTime[i].start.getTime());
      }
    }

    return TimeLib.timeStr(total);
  }

  totalTimeWeek() {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date();
    firstday.setDate(first);
    firstday.setHours(0, 0, 0, 0);

    var workTime = this.task.workTime;
    var total: number = 0;

    for (var i = 0; i < workTime.length; i++) {
      if ((workTime[i].end != null) && (workTime[i].start >= firstday)) {
        total += Math.abs(new Date(workTime[i].end).getTime() - new Date(workTime[i].start).getTime());
      }
    }

    return TimeLib.timeStr(total);
  }

  totalTimeToday() {
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var workTime = this.task.workTime;
    var total: number = 0;

    for (var i = 0; i < workTime.length; i++) {
      if ((workTime[i].end != null) && (workTime[i].start >= today)) {
        total += Math.abs(new Date(workTime[i].end).getTime() - new Date(workTime[i].start).getTime());
      }
    }

    return TimeLib.timeStr(total);
  }

}
