import { ChangeDetectorRef, Component } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskBoard';
  selectedDate = new Date();
  selectedMonth = new Date();
  today = new Date();
  taskList:any;

  dates = Array(42).fill(new Date());
  // dates=Array().fill(0);
  // isDifferentMonth=false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private taskService: TaskService
  ) {
    // this.taskList = taskService.tasks;
  }
  ngOnInit() {
    this.updateDates();
  }

  isDifferentMonth(date: Date) {
    return this.selectedMonth.getMonth() !== date.getMonth();
  }

  isToday(date: Date) {
    return date.toLocaleDateString() === this.today.toLocaleDateString();
  }
  updateDates() {
    this.selectedMonth.setDate(1);

    let firstDayOfMonth = this.selectedMonth.getDay();
    let startDate = new Date(this.selectedMonth);
    startDate.setDate(this.selectedMonth.getDate() - firstDayOfMonth);

    for (let i = 0; i < 42; i++) {
      let currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      this.dates[i] = currentDate;
    }
  }
  previousMonth() {
    let currentMonth = this.selectedMonth;
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    this.selectedMonth = new Date(currentMonth);
    this.updateDates();

    console.log(this.selectedMonth);
    this.changeDetectorRef.detectChanges();
  }
  nextMonth() {
    let currentMonth = this.selectedMonth;
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    this.selectedMonth = new Date(currentMonth);
    this.updateDates();

    // console.log(this.selectedMonth);

    this.changeDetectorRef.detectChanges();
  }
  displayTaskList(day: Date) {
    // console.log('day: ',day.toDateString());
    this.taskList = this.taskService.tasks.find(
      (taskList) => taskList.day.toDateString() === day.toDateString()
    )?.taskList;
    // console.log(this.taskList);
  }
  onAddTask(){
    console.log('before addTask:',this.taskService.tasks);
    this.taskService.addTask();
    console.log('after addTask:',this.taskService.tasks);
  }
}
