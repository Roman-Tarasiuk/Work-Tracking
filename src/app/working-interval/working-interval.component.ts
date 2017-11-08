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
    var s = moment(start, this.format);
    var e = moment(end, this.format);

    this.workingInterval.start = s.toDate();
    this.workingInterval.end = e.toDate();
  }

  displayTime(t) {
    var m = moment(t);
    return m.format(this.format);
  }

  delete() {
    this.onDelete.emit();
  }
}