import { Task, TaskDTO } from 'src/tasks/models';

export interface ForManagingTasksPortDriver {
  getAllTasks(): Promise<Task[]>;
  getTaskById(id: string): Promise<Task>;
  createTask(taskDTO: TaskDTO): Promise<Task>;
  updateTask(id: string, taskDTO: TaskDTO): Promise<Task>;
  deleteTask(id: string): Promise<Task>;
}
