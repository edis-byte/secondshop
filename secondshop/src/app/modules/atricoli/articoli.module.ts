import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ArticoliComponent } from '../atricoli/pages/articoli/articoli.component';
import { CoreModule } from '../../core/core.module';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [
    ArticoliComponent,
    GridArticoliComponent,
    ArticoliCardComponent, 
      
  ],
  
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule
  ],
  providers: [CurrencyPipe]
})
export class ArticoliModule { }
