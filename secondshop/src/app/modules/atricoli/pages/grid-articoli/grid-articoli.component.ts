import { Component, OnInit } from '@angular/core';
import { ArticoliService } from '../../../../core/services/articoli.service';
import { IArticoli } from '../../../../shared/models/articoli';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrl: './grid-articoli.component.scss'
})
export class GridArticoliComponent implements OnInit {

    articoli$: IArticoli[] = []

   constructor (private articoliService: ArticoliService) {}


  ngOnInit(): void {
    this.articoli$ = this.articoliService.getArticoli();
    console.log(this.articoli$)
  }
  handleEdit = (articolo: IArticoli) => {
    console.log("Modifica del codice" + articolo.codart)
  }
  handleDelete = (articolo: IArticoli) => {
    console.log("Elimina del codice" + articolo.codart)
    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === articolo.codart), 1)
    console.log(this.articoli$)
  }

}
