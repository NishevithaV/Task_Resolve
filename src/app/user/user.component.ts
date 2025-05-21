import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // settable from outside
  // exclamation mark means value of property will be set from outside 
  // allows to bind data from parent component
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return `assets/users/` + this.avatar;
  }

  onSelectUser() {
    
  }
}
