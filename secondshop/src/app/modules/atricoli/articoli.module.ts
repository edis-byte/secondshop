import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ArticoliComponent } from '../atricoli/pages/articoli/articoli.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [
    ArticoliComponent
  ],
  
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [CurrencyPipe]
})
export class ArticoliModule { }
