import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent implements DoCheck {

  // log change detection cycle 
  ngDoCheck(): void {
    console.log(this.constructor.name + '🌀');
  }

}
