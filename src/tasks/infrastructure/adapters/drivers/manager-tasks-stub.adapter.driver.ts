import { ForRepoManagingTasksPortDriven } from 'src/tasks/application/ports/drivens';
import { ForManagingTasksPortDriver } from 'src/tasks/application/ports/drivers';
import { HttpCodeStatus, HttpStatus, Response } from 'src/tasks/models';
import { ManagerTasksRepoStubAdapter } from '../drivens';
import { ManagerTasks } from 'src/tasks/application/services';
import taskDTO from 'src/tasks/models/task-dto.model';
import { CreateResponse } from 'src/tasks/application/tools/createResponse';
import { HttpException } from '@nestjs/common';

export default class ManagerTasksStubAdapter {
  private readonly managerTasks: ForManagingTasksPortDriver;
  private readonly repoManagingTasks: ForRepoManagingTasksPortDriven;

  constructor() {
    this.repoManagingTasks = new ManagerTasksRepoStubAdapter();
    this.managerTasks = new ManagerTasks(this.repoManagingTasks);
  }

  async getAllTasks(): Promise<Response> {
    try {
      const res = await this.managerTasks.getAllTasks();
      return CreateResponse(res);
    } catch (error) {
      const res = CreateResponse(
        null,
        HttpCodeStatus.NOT_FOUND,
        HttpStatus.NOT_FOUND,
        error,
      );
      throw new HttpException(res, HttpCodeStatus.NOT_FOUND);
    }
  }

  async getTaskById(id: string): Promise<Response> {
    try {
      const res = await this.managerTasks.getTaskById(id);
      return CreateResponse(res);
    } catch (error) {
      const res = CreateResponse(
        null,
        HttpCodeStatus.NOT_FOUND,
        HttpStatus.NOT_FOUND,
        error,
      );
      throw new HttpException(res, HttpCodeStatus.NOT_FOUND);
    }
  }

  async createTask(task: taskDTO): Promise<Response> {
    try {
      const res = await this.managerTasks.createTask(task);
      return CreateResponse(res);
    } catch (error) {
      const res = CreateResponse(
        null,
        HttpCodeStatus.NOT_FOUND,
        HttpStatus.NOT_FOUND,
        error,
      );
      throw new HttpException(res, HttpCodeStatus.NOT_FOUND);
    }
  }

  async updateTask(id: string, task: taskDTO): Promise<Response> {
    try {
      const res = await this.managerTasks.updateTask(id, task);
      return CreateResponse(res);
    } catch (error) {
      const res = CreateResponse(
        null,
        HttpCodeStatus.NOT_FOUND,
        HttpStatus.NOT_FOUND,
        error,
      );
      throw new HttpException(res, HttpCodeStatus.NOT_FOUND);
    }
  }

  async deleteTask(id: string): Promise<Response> {
    try {
      const res = await this.managerTasks.deleteTask(id);
      return CreateResponse(res);
    } catch (error) {
      const res = CreateResponse(
        null,
        HttpCodeStatus.NOT_FOUND,
        HttpStatus.NOT_FOUND,
        error,
      );
      throw new HttpException(res, HttpCodeStatus.NOT_FOUND);
    }
  }
}
