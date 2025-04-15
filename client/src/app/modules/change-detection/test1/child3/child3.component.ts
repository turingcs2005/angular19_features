import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child3',
  standalone: false,
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component {
  @Input() friend: any;
  @Input() v: number = 0;


}
