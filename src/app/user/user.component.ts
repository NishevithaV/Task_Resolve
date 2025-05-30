import { Component, Input, Output, computed, EventEmitter } from '@angular/core';
import { type User } from './user.model'; 

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // settable from outside
  // exclamation mark means value of property will be set from outside - allows to bind data from parent component
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  // avatar = input.required<string>(); // avatar property is an input to this component
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // only computes when avatar changes - improves efficiency
  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
