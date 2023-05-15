import { Task, TaskDTO } from 'src/tasks/models';
import { ForManagingTasksPortDriver } from '../ports/drivers';
import { ForRepoManagingTasksPortDriven } from '../ports/drivens';

export class ManagerTasks implements ForManagingTasksPortDriver {
  constructor(
    private readonly forRepoManagingTasks: ForRepoManagingTasksPortDriven,
  ) {}

  getAllTasks(): Promise<Task[]> {
    return this.forRepoManagingTasks.getAllTasks();
  }

  getTaskById(id: string): Promise<Task> {
    return this.forRepoManagingTasks.getTaskById(id);
  }

  createTask(taskDTO: TaskDTO): Promise<Task> {
    return this.forRepoManagingTasks.createTask(taskDTO);
  }

  updateTask(id: string, taskDTO: TaskDTO): Promise<Task> {
    return this.forRepoManagingTasks.updateTask(id, taskDTO);
  }

  deleteTask(id: string): Promise<Task> {
    return this.forRepoManagingTasks.deleteTask(id);
  }
}
