import { Component, OnInit } from '@angular/core';
import { MatTimepickerOption } from '@angular/material/timepicker';
import { FormFactoryService } from '../../../services/form-factory.service';
import { FormGroup } from  '@angular/forms';
import { startWith, pairwise } from 'rxjs';
import { generateTimeOptions } from '../module-data/module-tools';

@Component({
  selector: 'app-rxjs-override',
  standalone: false,
  templateUrl: './rxjs-override.component.html',
  styleUrl: './rxjs-override.component.scss'
})
export class RxjsOverrideComponent implements OnInit{
  
  intakeForm: FormGroup = new FormGroup({});
  customOptions: MatTimepickerOption<Date>[] = [];
  generateTimeOptions = generateTimeOptions;

  constructor(
    private formFactoryService: FormFactoryService
  ) { }

  ngOnInit(): void {
    // initialize intake form
    this.intakeForm = this.formFactoryService.getTimeForm();
    this.customOptions = this.generateTimeOptions();
    
    // set default dates
    const today1 = new Date();/*  */
    today1.setHours(9);
    today1.setMinutes(0);
    today1.setSeconds(0);
    today1.setMilliseconds(0);

    const today2 = new Date(today1.getTime());
    today2.setHours(10);

    //  🔥 form value initialization
    this.intakeForm.patchValue({
      startDate: today1,
      endDate: today2,
    });

    /* whenever start date changes,
    1. keep start date hours and minutes;
    2. end date will change its date part to match start date */

    this.intakeForm.get('startDate').valueChanges.pipe(
      startWith(this.intakeForm.get('startDate').value),
      pairwise()
    ).subscribe({
      next: ([previousDate, selectedDate]: [Date, Date]) => {
        let e = this.intakeForm.get('endDate').value;
        let dStart = new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          previousDate.getHours(),
          previousDate.getMinutes(),
          previousDate.getSeconds(),
          previousDate.getMilliseconds()
        );

        let dEnd = new Date(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds()
        );

        // Do not emit event, or it triggers infinite chain reaction
        this.intakeForm.get('startDate').setValue(dStart, {emitEvent: false});
        this.intakeForm.get('endDate').setValue(dEnd, {emitEvent: false});

      },
      error: e => {
        console.error(e);
      }});

  }

  onSubmit() {}
}
