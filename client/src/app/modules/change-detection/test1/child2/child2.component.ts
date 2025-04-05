import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component {
  @Input() friend: any;
}
