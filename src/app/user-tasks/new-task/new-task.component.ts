import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  titleEntered = '';
  summaryEntered = '';
  dueDateEntered = '';

  // injects dependency as value for property tasksService
  private tasksService = inject(TasksService);

  onCancel() {
    // emits an event listener to parent component user-tasks
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.titleEntered,
      summary: this.summaryEntered,
      date: this.dueDateEntered
    }, this.userId); 
    this.close.emit();
  }
}
