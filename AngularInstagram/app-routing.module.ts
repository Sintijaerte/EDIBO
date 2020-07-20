import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';

import {SpinnerComponent} from './spinner/spinner.component; 
import {FailiComponent} from './faili/faili.component';

const routes: Routes = [
  {path: 'Spinner', component: SpinnerComponent}; 
  {path: 'Faili', component: FailiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
