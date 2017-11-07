import { Component, OnInit, Input } from '@angular/core';
import { WorkingInterval } from '../../working-interval.model';
import { TimeLib } from '../../time.library';

@Component({
  selector: 'app-working-interval',
  templateUrl: './working-interval.component.html',
  styleUrls: ['./working-interval.component.css']
})
export class WorkingIntervalComponent implements OnInit {
  @Input() workingInterval: WorkingInterval;

  constructor() { }

  ngOnInit() {
  }

  timeSpan(start: Date, end: Date) {
    return TimeLib.timeStr(end.getTime() - start.getTime());
  }

  update(start: string, end: string) {
    // console.log('Updating:');
    // console.log(start);
    // console.log(end);
    //this.workingInterval.start =
    //var q = Date.parse(start);

    // var q2 = new Date(start);
    // console.log(q2);

    this.workingInterval.start = new Date(start);
    this.workingInterval.end = new Date(end);
  }
}
