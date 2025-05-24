import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-tasks',
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  // question mark - optional property
  @Input() name?: string;
}
