import { Component, OnInit } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../task.model';
import { WorkingInterval } from '../../working-interval.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task(4, 'id-123', 'Home'),
      new Task(2, 'id-123', 'TRM'),
      new Task(3, 'QAT-3456', 'TM'),
      new Task(1, 'BMRS-9876', 'BM')
    ]

    this.tasks[0].workTime.push(new WorkingInterval(
      new Date(2017, 9, 28, 10, 15),
      new Date())
    );
  }

  sordedByOrder(): Task[] {
    var copy = this.tasks.slice(0, this.tasks.length);
    return copy.sort((a: Task, b: Task) => a.order - b.order);
  }

  ngOnInit() {
  }

}
