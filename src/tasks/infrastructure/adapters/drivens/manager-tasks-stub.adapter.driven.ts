import { ForRepoManagingTasksPortDriven } from 'src/tasks/application/ports/drivens';
import { Task } from 'src/tasks/models';
import taskDTO from 'src/tasks/models/task-dto.model';

export class ManagerTasksRepoStubAdapter
  implements ForRepoManagingTasksPortDriven
{
  constructor() {}

  private tasksMock: Task[] = [
    {
      id: '0',
      title: 'TODO TITLE #1',
      description: 'Some descriprion todo #1',
      isDone: false,
    },
    {
      id: '1',
      title: 'TODO TITLE #2',
      description: 'Some descriprion todo #2',
      isDone: true,
    },
    {
      id: '2',
      title: 'TODO TITLE #3',
      description: 'Some descriprion todo #3',
      isDone: true,
    },
    {
      id: '3',
      title: 'TODO TITLE #4',
      description: 'Some descriprion todo #4',
      isDone: false,
    },
  ];

  getAllTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasksMock);
  }

  getTaskById(id: string): Promise<Task> {
    const task = this.tasksMock.find((task) => task.id == id);

    if (task === undefined) return Promise.reject(new Error('not id found'));

    return Promise.resolve(task);
  }

  createTask(taskDTO: taskDTO): Promise<Task> {
    const taskToPush = {
      id: `${
        Number.parseInt(this.tasksMock[this.tasksMock.length - 1].id) + 1
      }`,
      ...taskDTO,
    };

    this.tasksMock.push(taskToPush);

    return Promise.resolve(this.tasksMock[this.tasksMock.length - 1]);
  }

  updateTask(id: string, taskDTO: taskDTO): Promise<Task> {
    const indexTaskToUpdate = this.tasksMock.findIndex(
      (task) => task.id === id,
    );

    if (indexTaskToUpdate < 0) return Promise.reject(new Error('not id found'));

    this.tasksMock[indexTaskToUpdate] = {
      ...this.tasksMock[indexTaskToUpdate],
      ...taskDTO,
    };

    return Promise.resolve(this.tasksMock[indexTaskToUpdate]);
  }

  deleteTask(id: string): Promise<Task> {
    const indexTaskToDelete = this.tasksMock.findIndex(
      (task) => task.id === id,
    );

    if (indexTaskToDelete < 0) return Promise.reject(new Error('not id found'));

    const taskDelete = this.tasksMock[indexTaskToDelete];

    this.tasksMock.splice(indexTaskToDelete, 1);

    return Promise.resolve(taskDelete);
  }
}
