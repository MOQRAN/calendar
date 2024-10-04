import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = [
    {
      day: new Date(),
      taskList: [
        {
          id: 0,
          name: 'task 0',
          priority: 'heigh',
          time: '',
          duration: 40,
        },
        {
          id: 1,
          name: 'task 1',
          priority: 'heigh',
          time: '',
          duration: 40,
        },
        {
          id: 0,
          name: 'task 2',
          priority: 'heigh',
          time: '',
          duration: 40,
        },
      ],
    },
  ];

  constructor() {}
}
