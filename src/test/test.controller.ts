import {Controller, Get, HttpCode, Header, Redirect, Post, Delete, Param, Body, Put} from "@nestjs/common";
import {ITask} from "@src/test/task.interface";
import {TestService} from "@src/test/test.service";

interface Task {
    id: number; task: string
}

class ITasks {
}

@Controller('task')
export class TestController{
    constructor(private testService: TestService){}
    @Get()
    // @Redirect('https://google.com')
    // @HttpCode(206)
    // @Header('Test', 'Test value')
    getTasks(): ITasks[]{
        return this.testService.getTasks()
    }
    @Get(':id')
    getTaskById(@Param('id') id: number ): { task: string; id: number }{
        return this.testService.getTaskById(id)
    }
    @Post()
    createTask(@Body('task') task: ITask) : ITask {
        return this.testService.createTask(task)
    }
    @Delete(':id')
    deleteTask(@Param('id') id: string){
        return this.testService.deleteTask(id)
    }
}