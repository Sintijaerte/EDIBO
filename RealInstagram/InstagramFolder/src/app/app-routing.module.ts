import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Spineris1Component} from './spineris1/spineris1.component'; 

const routes: Routes = [
  {path: 'Spineris1', component: Spineris1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
