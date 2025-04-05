import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';
import { SharedModule } from '../shared/shared.module';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { Parent1Component } from './test1/parent1/parent1.component';
import { Child1Component } from './test1/child1/child1.component';
import { Child2Component } from './test1/child2/child2.component';
import { Child3Component } from './test1/child3/child3.component';

@NgModule({
  declarations: [
    ChangeDetectionComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    CommonModule,
    ChangeDetectionRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class ChangeDetectionModule { }
