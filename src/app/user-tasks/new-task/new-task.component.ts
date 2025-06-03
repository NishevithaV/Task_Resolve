import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{title: string; summary: string; date: string;}>();
  titleEntered = '';
  summaryEntered = '';
  dueDateEntered = '';

  onCancel() {
    // emits an event listener to parent component user-tasks
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.titleEntered,
      summary: this.summaryEntered,
      date: this.dueDateEntered
    })
  }
}
