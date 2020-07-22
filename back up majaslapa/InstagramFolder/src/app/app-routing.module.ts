import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Spineris1Component} from './spineris1/spineris1.component'; 

import { TvnetComponent } from './tvnet/tvnet.component'; 
import { DelfiComponent } from './delfi/delfi.component'; 
import { NavComponent } from './nav/nav.component';
// import { FakeInstaComponent} from './fake-insta/fake-insta.component'

import { FakeinstaComponent} from './fakeinsta/fakeinsta.component'

const routes: Routes = [
  { path: 'Spineris1', component: Spineris1Component }, 
  { path: 'tvnet', component: TvnetComponent },
  { path: 'delfi', component: DelfiComponent },
  { path: 'nav', component: NavComponent}, 
  { path: 'fakeinsta', component: FakeinstaComponent}
  // { path: 'FakeInsta', component: FakeInstaComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
