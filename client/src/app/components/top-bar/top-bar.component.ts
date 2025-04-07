import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent {

  // log change detection cycle 

}
