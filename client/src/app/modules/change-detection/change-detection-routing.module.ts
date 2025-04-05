import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionComponent } from './change-detection.component';
import { Parent1Component } from './test1/parent1/parent1.component';
import { Parent2Component } from './test2/parent2/parent2.component';

const routes: Routes = [
  { path: '', component: ChangeDetectionComponent },
  { path: 'parent1', component: Parent1Component },
  { path: 'parent2', component: Parent2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeDetectionRoutingModule { }
