import { Task } from './task.model';
import * as moment from 'moment';

export class TaskManager {
  tasks: Task[];
  runningTask: Task = null;
  private isSaved = true;
  loadedFromFile: boolean = false;
  
  private format: string = "DD.MM.YYYY HH:mm:ss";

  constructor() {
    this.tasks = [
      new Task(4, 'id-0', 'Idle Time')
    ]
  }

  isDataSaved() {
    return this.isSaved;
  }

  startTask(taskId) {
    var t;
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == taskId) {
        t = new Date();
        t = this.dateTrim(t);
        if (this.runningTask != null) {
          this.runningTask.endWork(t);
        }
        this.runningTask = this.tasks[i];
        this.runningTask.startWork(t);

        this.isSaved = false;

        return true;
      }
    }

    return false;
  }

  stopRunningTask(date: Date) {
    if (this.runningTask != null) {
      var d = date || new Date();
      d = this.dateTrim(d);
      this.runningTask.endWork(d);
      this.runningTask = null;
    }
  }

  updateRunningTask(date: Date) {
    if (this.runningTask != null) {
      var d = date || new Date();
      this.runningTask.setEnd(d);
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

  edit(taskId) {
    var index = this.findTaskIndex(taskId);

    if ((index >= 0) && (index < this.tasks.length)) {
      // TO DO: Rest of logic.
    }
  }

  delete(taskId) {
    var index = this.findTaskIndex(taskId);

    if ((index >= 0) && (index < this.tasks.length)) {
      this.tasks.splice(index, 1);
    }
  }

  deleteWorkItem(taskId, i) {
    var index = this.findTaskIndex(taskId);

    if ((index >= 0) && (index < this.tasks.length)) {
      var t = this.tasks[index];

      if (i >= 0 && i < t.workTime.length) {
        t.workTime.splice(i, 1);
      }
    }
  }

  saveData() {
    this.uploadWorkToStorage(this.tasks);
  }

  loadData() {
    this.tasks = this.getWorkFromStorage();
  }

  checkWork(): boolean {
    var result: boolean = true;
    for (var i = 0; i < this.tasks.length; i++) {
      var t = this.tasks[i];
      for (var j = 0; j < t.workTime.length; j++) {
        if((t.workTime[j].end == null)
            && ((j < (t.workTime.length - 1)) || (!this.runningTask))) {
          result = false;
          break;
        }
      }
    }

    return result;
  }

  newTask(id, title, priority) {
    this.addTask(id, title, priority);
  }

  getTaskTitle(taskId) {
    var index = this.findTaskIndex(taskId);

    if (index >= 0) {
      return this.tasks[index].title;
    }

    return null;
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

  private addTask(id: string, title: string, priority: number) {
    if (priority < 0) {
      priority = 0;
    }
    else if (priority > this.tasks.length) {
      priority = this.tasks.length;
    }

    this.tasks.splice(priority, 0, new Task(priority, id, title));
  }

  private uploadWorkToStorage(work) {
    localStorage.setItem('work',  JSON.stringify(work));
  }

  private getWorkFromStorage () {
      var wStr = localStorage.getItem('work');

      if (wStr == undefined || wStr == null) {
          console.log('getWorkFromStorage(): no data loaded.');
          return null;
      }

      var tmp: Task[] = JSON.parse(wStr);

      for (var i = 0; i < tmp.length; i++) {
        var timespans = tmp[i].workTime;

        for (var j = 0; j < timespans.length; j++) {
          if (timespans[j].start) {
            timespans[j].start = new Date(timespans[j].start);
          }
          if (timespans[j].end) {
            timespans[j].end = new Date(timespans[j].end);
          }
        }
      }

      var result: Task[] = new Array<Task>();

      for (var i = 0; i < tmp.length; i++) {
        result.push(new Task(tmp[i].priority, tmp[i].id, tmp[i].title, tmp[i].workTime));
      }

      this.loadedFromFile = false;

      return result;
  }

  dateTrim(date: Date) {
    var m = moment(date);
    return moment(m.format(this.format), this.format).toDate();
  }

  saveDataToFile() {
    let a = document.createElement('a');
    a.href = 'data:application/octet-stream,' + JSON.stringify(this.tasks);
    a.download = 'abc.txt';
    a.click();
    
    this.isSaved = true;
  }

  async importFromFile(event) {
    var work = await this.openFile(event) as string;
    this.tasks = JSON.parse(work);
    this.loadedFromFile = true;
  }

  async openFile(event) {
    var that = this;
    var file = event.target.files[0];

    // https://stackoverflow.com/questions/51026420/filereader-readastext-async-issues
    return new Promise((resolve, reject) => {
      let content = '';
      const reader = new FileReader();

      // Wait till complete
      reader.onloadend = function(e: any) {
        content = e.target.result;
        resolve(content);
      };

      // Make sure to handle error states
      reader.onerror = function(e: any) {
        reject(e);
      };

      reader.readAsText(file);
    });
  }
}