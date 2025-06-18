import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Complete First Quarterly Report',
      summary:
        'Prepare and submit the first quarterly report for the management team.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Update Employee Handbook',
      summary: 'Revise and update the employee handbook for 2025.',
      dueDate: '2025-07-15',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Organize Team Meeting',
      summary: 'Schedule and organize the monthly team meeting.',
      dueDate: '2024-06-10',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addNewTask() {
    this.isAddingNewTask = true;
  }

  onCancelAddTask() {
    this.isAddingNewTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    // .unshift() pushes new task to start of array
    // .push() to add to end of array
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.isAddingNewTask = false;
  }
}
