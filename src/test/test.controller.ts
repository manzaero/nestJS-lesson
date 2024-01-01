import {Controller, Get, HttpCode, Header, Redirect, Post, Delete, Param, Body} from "@nestjs/common";

interface Task {
    id: number; task: string
}

@Controller('task')
export class TestController{
    private tasks: Task[] = [
        {id: 1, task: 'task 1'},
        {id: 2, task: 'task 2'},
    ];

    @Get()
    // @Redirect('https://google.com')
    // @HttpCode(206)
    // @Header('Test', 'Test value')
    getTasks(): Task[]{
        return this.tasks
    }
    @Get(':id')
    getTaskById(@Param('id') id: number ): Task{
        const task = this.tasks.find((t) => t.id === +id)
        return task
    }
    @Post()
    createTask(@Body('task') task: Task) : Task {
        this.tasks.push(task);
        return task;
    }
}