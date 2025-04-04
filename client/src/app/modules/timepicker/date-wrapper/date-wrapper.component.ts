import { Component, OnInit } from '@angular/core';
import { MatTimepickerOption } from '@angular/material/timepicker';
import { FormFactoryService } from '../../../services/form-factory.service';
import { FormGroup } from  '@angular/forms';
import { generateTimeOptions } from '../module-data/module-tools';
import { DateWrapper } from '../module-data/module-models';

@Component({
  selector: 'app-date-wrapper',
  standalone: false,
  templateUrl: './date-wrapper.component.html',
  styleUrl: './date-wrapper.component.scss'
})
export class DateWrapperComponent implements OnInit{ 

  intakeForm: FormGroup = new FormGroup({});
  customOptions: MatTimepickerOption<Date>[] = [];
  generateTimeOptions = generateTimeOptions;

  constructor(

    private formFactoryService: FormFactoryService



  ) { }

  ngOnInit(): void {

    this.intakeForm = this.formFactoryService.getTimeForm2();
    this.customOptions = this.generateTimeOptions();
    
    // set default start time
    this.intakeForm.get('startTime').value.setHours(9);
    this.intakeForm.get('startTime').value.setMinutes(0);
    this.intakeForm.get('startTime').value.setSeconds(0);
    this.intakeForm.get('startTime').value.setMilliseconds(0);

    // set default end time
    this.intakeForm.get('endTime').value.setHours(17);
    this.intakeForm.get('endTime').value.setMinutes(0);
    this.intakeForm.get('endTime').value.setSeconds(0);
    this.intakeForm.get('endTime').value.setMilliseconds(0);

  }

  onSubmit() {
    const d = new DateWrapper(this.intakeForm.get('date').value);
    const t1 =this.intakeForm.get('startTime').value;
    const t2 = this.intakeForm.get('endTime').value;
    d.assignDateTo(t1);
    d.assignDateTo(t2);
    console.log([t1, t2])
  }

}
