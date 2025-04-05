import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: false,
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss'
})
export class Child1Component {
  @Input() friend: any;

}
