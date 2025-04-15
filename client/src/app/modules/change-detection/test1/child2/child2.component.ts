import { Component, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { interval, take, map, Observable } from 'rxjs';

@Component({
  selector: 'app-child2',
  standalone: false,
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements DoCheck {
  @Input() friend: any;

  countdown$: Observable<number>;

  constructor(public cdr: ChangeDetectorRef) {}

  // console log whenever change detection is triggered
  ngDoCheck(): void {
    console.log(this.constructor.name + '🌀');
  }

  forceCD() {
    const seconds = 2;
    this.countdown$ = interval(5000).pipe(
      take(seconds - 1), // emit 2 values, 1, 0
      map(i => seconds - i)
    )
    setTimeout( () => {
      this.cdr.detectChanges();
    }, 15000)
  }

}
