import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Response, TaskDTO } from '../models';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Response> {
    return await this.taskService.getAllTasks();
  }

  @Get('gretting')
  gretting(@Query() query) {
    return `hello ${query.name} ${query.lastName}`;
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Response> {
    return await this.taskService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: TaskDTO): Promise<Response> {
    return await this.taskService.createTask(task);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() task: TaskDTO,
  ): Promise<Response> {
    return await this.taskService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Response> {
    return await this.taskService.deleteTask(id);
  }
}
