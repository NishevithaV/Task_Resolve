import { inject, Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

// This service is responsible for managing tasks, including fetching user-specific tasks,
// adding new tasks, and removing tasks. It simulates a backend service by using an in memory array of tasks.
@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = [
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

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    // .unshift() pushes new task to start of array
    // .push() to add to end of array
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}