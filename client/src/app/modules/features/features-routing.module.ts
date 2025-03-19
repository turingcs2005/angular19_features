import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { TimepickerComponent } from './timepicker/timepicker.component';

const routes: Routes = [
  { path: '', component: FeaturesComponent },
  { path: 'timepicker', component: TimepickerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
