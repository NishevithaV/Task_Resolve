import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-tasks',
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent {
  @Input({ required: true }) name!: string;
}
