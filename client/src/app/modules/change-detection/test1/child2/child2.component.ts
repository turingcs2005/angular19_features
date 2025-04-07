import { Component, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements DoCheck {
  @Input() friend: any;

  constructor(public cdr: ChangeDetectorRef) {}

  // console log whenever change detection is triggered
  ngDoCheck(): void {
    console.log(this.constructor.name + '🌀');
  }

  forceCD() {
    this.cdr.detectChanges();
  }

}
