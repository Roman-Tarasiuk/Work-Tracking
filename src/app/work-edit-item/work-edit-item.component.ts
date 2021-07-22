import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Task } from '../../task.model';
import { TimeLib } from '../../time.library';
import * as moment from 'moment';

@Component({
  selector: 'app-work-edit-item',
  templateUrl: './work-edit-item.component.html',
  styleUrls: ['./work-edit-item.component.css']
})
export class WorkEditItemComponent implements OnInit, OnChanges {
  @Output() deleteWI: EventEmitter<number> = new EventEmitter();
  @Input() task: Task;

  @Input() filterFrom: Date;
  @Input() filterTo: Date;

  format: string = "DD.MM.YYYY HH:mm:ss";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.filterFrom) {
      this.filterFrom = changes.filterFrom.currentValue;
    }
    if (changes.filterTo) {
      this.filterTo = changes.filterTo.currentValue;
    }
  }

  onDeleteWI(i: number) {
    this.deleteWI.emit(i);
  }

  formatted(date) {
    var d = moment(date);
    
    if (d.toDate().getTime()) {
      return d.format(this.format);
    }
    else {
      return '';
    }
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
          && ((this.filterFrom && (workTime[i].start >= this.filterFrom))
              || (this.filterFrom == null))
          && ((this.filterTo && (workTime[i].end <= this.filterTo))
              || (this.filterTo == null))) {
        total += Math.abs(workTime[i].end.getTime() - workTime[i].start.getTime());
      }
    }

    return TimeLib.timeStr(total);
  }
}
