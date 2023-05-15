import { Injectable } from '@nestjs/common';
import { Response, TaskDTO } from '../models';
import ManagerTasksStubAdapter from './adapters/drivers/manager-tasks-stub.adapter.driver';

@Injectable()
export class TasksService {
  private managerTaksAdapter = new ManagerTasksStubAdapter();

  getAllTasks(): Promise<Response> {
    return this.managerTaksAdapter.getAllTasks();
  }

  getTaskById(id: string): Promise<Response> {
    return this.managerTaksAdapter.getTaskById(id);
  }

  createTask(task: TaskDTO): Promise<Response> {
    return this.managerTaksAdapter.createTask(task);
  }

  updateTask(id: string, task: TaskDTO): Promise<Response> {
    return this.managerTaksAdapter.updateTask(id, task);
  }

  deleteTask(id: string): Promise<Response> {
    return this.managerTaksAdapter.deleteTask(id);
  }
}
