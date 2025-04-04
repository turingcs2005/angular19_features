import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { endWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(
    private fb: FormBuilder
  ) { }

  getTimeForm() {
    return this.fb.group({
      startDate: new Date(),
      endDate: new Date()
    });
  }

  getTimeForm2() {
    return this.fb.group({
      date: new Date(),
      startTime: new Date(),
      endTime: new Date()
    });
  }

}
