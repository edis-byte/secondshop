import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule
  ]
})
export class LogoutModule { }
