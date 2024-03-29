import {ITask} from "@src/test/task.interface";

export class Task implements ITask{
    id: number;
    task: string;
    constructor(task: string){
        this.task = task;
        this.id = new Date().getTime();
    }
}