import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { ColorChangeDirective } from './direttive/color-change.directive';



@NgModule({
  declarations: [
    ColorChangeDirective
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    ColorChangeDirective
  ]
})
export class SharedModule { }
