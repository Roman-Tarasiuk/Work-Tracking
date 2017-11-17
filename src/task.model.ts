import { WorkingInterval } from './working-interval.model';

export class Task {
    priority: number;
    id: string;
    title: string;
    workTime: WorkingInterval[];
    started: boolean = false;
        
    constructor(priority: number, id: string, title: string, workTime?: WorkingInterval[]) {
        this.priority = priority;
        this.id = id;
        this.title = title;
        if (workTime) {
            this.workTime = workTime;
        }
        else {
            this.workTime = new Array<WorkingInterval>();
        }
    }

    startWork(d: Date) {
        this.workTime.push(new WorkingInterval(d, null));
        this.started = true;
    }

    endWork (d: Date) {
        this.setEnd(d);
        this.started = false;
    }

    setEnd (d: Date) {
        var len = this.workTime.length;
        this.workTime[len - 1].end = d;
    }
}
