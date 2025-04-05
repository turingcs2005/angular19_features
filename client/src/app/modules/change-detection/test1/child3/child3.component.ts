import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: false,
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss'
})
export class Child3Component {
  @Input() friend: any;


}
