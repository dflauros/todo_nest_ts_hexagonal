import { Task } from './task.model';

type taskDTO = Omit<Task, 'id'>;

export default taskDTO;
