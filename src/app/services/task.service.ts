import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks=[{
    id:0,
    name:'task 0',
    priority:'heigh',
    time:'',
    duration:40
  }];

  constructor() { }
}
