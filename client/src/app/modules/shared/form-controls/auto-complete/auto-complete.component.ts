import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of  } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
  standalone: false
})
export class AutoCompleteComponent implements OnInit {

  @Input() label = '';
  @Input() control = new FormControl(null);
  @Input() options = [''];
  @Input() toolTip: string = '';
  @Input() size: string = '';
  @Input() icon = '';
  
  filteredOptions$: Observable<string[]> = of(['']);

  ngOnInit(): void {
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map( value => this._filter( value || '')),
    ); 
  }

  private _filter( value: string ): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter( option => option.toLowerCase().includes(filterValue));
  }

}
