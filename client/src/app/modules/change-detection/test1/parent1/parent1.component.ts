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

  friend = {
    msg: 'Hello',
    name: 'John'
  }

  
  toggleFriendMessage() {
    this.friend.msg = this.friend.msg === 'Hello' ? 'World' : 'Hello';
    // this.child2.cdr.markForCheck();
  }

}
