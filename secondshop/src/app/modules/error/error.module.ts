import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { ErrorComponent } from './pages/error/error.component';


@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ErrorModule { }
