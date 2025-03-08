import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ArticoliComponent } from '../atricoli/pages/articoli/articoli.component';
import { CoreModule } from '../../core/core.module';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';




@NgModule({
  declarations: [
    ArticoliComponent,
    GridArticoliComponent
  ],
  
  imports: [
    CommonModule,
    CoreModule
  ],
  providers: [CurrencyPipe]
})
export class ArticoliModule { }
