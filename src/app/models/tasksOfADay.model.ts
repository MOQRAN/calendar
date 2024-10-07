import { Task } from '../models/task.model';
export class TasksOfADay{
  constructor(
    public day:Date,
    public taskList: Task[]
  ){
  }
}
