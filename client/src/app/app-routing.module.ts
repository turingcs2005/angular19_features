import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'documentation', loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule) },
  { path: 'timepicker', loadChildren: () => import('./modules/timepicker/timepicker.module').then(m => m.TimepickerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
