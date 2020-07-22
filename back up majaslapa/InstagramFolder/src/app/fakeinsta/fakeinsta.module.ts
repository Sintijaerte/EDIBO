import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeinstaComponent} from '../fakeinsta/fakeinsta.component'


@NgModule({
  declarations: [FakeinstaComponent],
  imports: [
    CommonModule
  ], 
  exports: [FakeinstaComponent], 
})
export class FakeinstaModule { }
