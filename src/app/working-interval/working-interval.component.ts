import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WorkingInterval } from '../../working-interval.model';
import { TimeLib } from '../../time.library';
import * as moment from 'moment';

@Component({
  selector: 'app-working-interval',
  templateUrl: './working-interval.component.html',
  styleUrls: ['./working-interval.component.css']
})
export class WorkingIntervalComponent implements OnInit {
  @Input() workingInterval: WorkingInterval;

  @Output() onDelete: EventEmitter<{}> = new EventEmitter();

  format: string = "DD.MM.YYYY HH:mm:ss";

  constructor() { }

  ngOnInit() {
  }

  timeSpan(start: Date, end: Date) {
    return TimeLib.timeStr(end.getTime() - start.getTime());
  }

  update(start: string, end: string) {
    var s = moment(start, this.format).toDate();
    var e = moment(end, this.format).toDate();

    if (s.getTime()) {
      this.workingInterval.start = s;
    }
    if (e.getTime()) {
      this.workingInterval.end = e;
    }
  }

  displayTime(t) {
    var m = moment(t);
    return m.format(this.format);
  }

  delete() {
    this.onDelete.emit();
  }
}
