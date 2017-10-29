import { WorkingInterval } from './working-interval.model';

export class Task {
    order: number;
    id: string;
    title: string;
    workTime: WorkingInterval[];

    constructor(order: number, id: string, title: string) {
        this.order = order;
        this.id = id;
        this.title = title;
        this.workTime = new Array<WorkingInterval>();
    }

    startWork(d: Date) {
        this.workTime.push(new WorkingInterval(d, null));
    }

    endWork (d: Date) {
        var length = this.workTime.length;
        this.workTime[length - 1].end = d;
    }
}
