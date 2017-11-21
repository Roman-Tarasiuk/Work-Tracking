import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task.model';
import { TimeLib } from '../../time.library';
import * as moment from 'moment';

@Component({
  selector: 'app-work-edit-item',
  templateUrl: './work-edit-item.component.html',
  styleUrls: ['./work-edit-item.component.css']
})
export class WorkEditItemComponent implements OnInit {
  @Output() onDeleteWorkingInterval: EventEmitter<number> = new EventEmitter();
  @Input() task: Task;

  filterFrom: Date;
  filterTo: Date;

  format: string = "DD.MM.YYYY HH:mm:ss";

  constructor() { }

  ngOnInit() {
  }

  deleteWI(i: number) {
    this.onDeleteWorkingInterval.emit(i);
  }

  applyFilter(from: string, to: string) {
    var s = moment(from, this.format).toDate();
    var e = moment(to, this.format).toDate();

    if (s.getTime()) {
      this.filterFrom = s;
    }
    else {
      this.filterFrom = null;
    }

    if (e.getTime()) {
      this.filterTo = e;
    }
    else {
      this.filterTo = null;
    }
  }

  totalTime(): string {
    var workTime = this.task.workTime;
    var total: number = 0;

    for (var i = 0; i < workTime.length; i++) {
      if (workTime[i].end != null
        && (this.filterFrom && (workTime[i].start >= this.filterFrom))
        && (this.filterTo && (workTime[i].end <= this.filterTo))) {
        total += Math.abs(workTime[i].end.getTime() - workTime[i].start.getTime());
      }
    }

    return TimeLib.timeStr(total);
  }
}
