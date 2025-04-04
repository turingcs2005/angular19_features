import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimepickerRoutingModule } from './timepicker-routing.module';
import { TimepickerComponent } from './timepicker.component';
import { SharedModule } from '../shared/shared.module';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { RxjsOverrideComponent } from './rxjs-override/rxjs-override.component';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';

@NgModule({
  declarations: [
    TimepickerComponent,
    RxjsOverrideComponent,
    DateWrapperComponent,
  ],
  imports: [
    CommonModule,
    TimepickerRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class TimepickerModule { }
