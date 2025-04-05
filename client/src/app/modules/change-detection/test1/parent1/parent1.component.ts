import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  standalone: false,
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
  friend = {
    msg: 'Hello',
    name: 'John'
  }

  
  toggleFriendMessage() {
    this.friend.msg = this.friend.msg === 'Hello' ? 'World' : 'Hello';
  }

}
