import {Body, Injectable, Param} from "@nestjs/common";
import {ITask} from "@src/test/task.interface";

@Injectable
export class TestService{
    private tasks:
        ({ task: string; id: number } | { task: string; id: number })[] = [
        {id: 1, task: 'task 1'},
        {id: 2, task: 'task 2'},
    ];

    getTasks(): { task: string; id: number }[]{
        return this.tasks;
    }

    getTaskById(id: number): { task: string; id: number }[]{
        const task = this.tasks.find((t) => t.id === +id)
        return this.tasks
    }
    createTask( task: ITask) : { task: string; id: number } {
        this.tasks.push(task);
        return this.tasks;
    }
    deleteTask( id: string  ){
        return `Delete action a #${id} task`;
    }
}