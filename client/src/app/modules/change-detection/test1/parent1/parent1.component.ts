import { Component, viewChild, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent1',
  standalone: false,
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
  @ViewChild(Child2Component) child2: Child2Component;

  friend: any = {
    msg: 'Hello',
    name: 'John'
  }

  value = 1;

  
  toggleFriendMessage() {
    this.friend.msg = this.friend.msg === 'Hello' ? 'World' : 'Hello';
  }

  markForCheck() {
    this.friend.msg = this.friend.msg === 'Hello' ? 'World' : 'Hello';
    this.child2.cdr.markForCheck();
  }

  resetReference() {
    const oldFriend = this.friend
    this.friend = {}; // reset object reference
    Object.assign(this.friend, oldFriend);
    this.toggleFriendMessage()
  }

  increment() {
    this.value++;
  }

}
