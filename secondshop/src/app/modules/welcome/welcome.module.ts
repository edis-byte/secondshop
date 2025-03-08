import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    CoreModule,
  
  ]
})
export class WelcomeModule { }
