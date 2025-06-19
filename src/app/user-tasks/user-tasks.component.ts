import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'user-tasks',
  imports: [TaskComponent, NewTaskComponent, NgIf],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // question mark - optional property
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingNewTask = false;

  // dependency injection allows to create single instance of TasksService that can be shared across components
  // specify what type of value you need and Angular provides it as an argument in constructor
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  addNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseAddTask() {
    this.isAddingNewTask = false;
  }
}
