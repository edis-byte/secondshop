import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../../../shared/models/articoli';
import { ArticoliService } from '../../../../core/services/articoli.service';


@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.scss']
})
export class ArticoliComponent implements OnInit {


  articoli: IArticoli[] = []

  constructor(private articoliService:ArticoliService ) {}
  ngOnInit(): void {
    this.articoli = this.articoliService.getArticoli()
  }

}
