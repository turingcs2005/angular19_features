import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

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

}
