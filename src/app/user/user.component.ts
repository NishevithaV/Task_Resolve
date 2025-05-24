import { Component, Input, Output, input, computed, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // settable from outside
  // exclamation mark means value of property will be set from outside - allows to bind data from parent component
  @Input ({required: true}) id! : string;
  @Input({required: true}) avatar!: string;
  // required (configuration) to enable error checking
  @Input({required: true}) name!: string;

  // avatar = input.required<string>(); // avatar property is an input to this component
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // only computes when avatar changes - improves efficiency
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar;
  });

  onSelectUser() {
    this.select.emit(this.id);
  }
}
