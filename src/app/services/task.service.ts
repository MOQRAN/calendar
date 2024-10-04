import { Injectable } from '@angular/core';
import { TasksOfADay } from '../models/tasksOfADay.model';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks!: TasksOfADay[];

  constructor() {
    this.tasks=[];
  }
  addTask() {

    this.tasks.push({
      day: new Date(),
      taskList: [ ],
    });
    const task=new Task(0, 'task 0', 'heigh', new Date(), 40);
    this.tasks[0].taskList.push(task);
  }
}
