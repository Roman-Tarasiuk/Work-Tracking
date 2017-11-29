import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskManager } from '../../taskmanager.model';
import { Task } from '../../task.model';
import * as moment from 'moment';

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})
export class WorkEditComponent implements OnInit {
  @Output() onClose: EventEmitter<{}> = new EventEmitter();
  @Input() taskManager: TaskManager;

  overallFilterFrom: Date = null;
  overallFilterTo: Date = null;

  format: string = "DD.MM.YYYY HH:mm:ss";

  constructor() { }

  ngOnInit() {
  }

  applyFilter(from: string, to: string) {
    var s = moment(from, this.format).toDate();
    var e = moment(to, this.format).toDate();

    if (s.getTime()) {
      this.overallFilterFrom = s;
    }
    else {
      this.overallFilterFrom = null;
    }

    if (e.getTime()) {
      this.overallFilterTo = e;
    }
    else {
      this.overallFilterTo = null;
    }
    
    //console.log('Applying common filter: from: ' + this.commonFilterFrom + ', to: ' + this.commonFilterTo);
  }

  delete(task: Task, i: number) {
    this.taskManager.deleteWork(task.id, i);
  }

  close() {
    this.onClose.emit();
  }
}
