import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../../../shared/models/articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.scss']
})
export class ArticoliComponent implements OnInit {


  articoli: IArticoli[] = [
    {codart : '0156132', descrizione: 'Barilla farina 1 kg', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    {codart : '5403541', descrizione: 'Barilla pasta gr.500 n.70 1/2 penne', um: 'PZ', pzcart: 28, peso: 1.3, prezzo: 3.02,  active: true, data: new Date()},
    {codart : '2410640', descrizione: 'findus fior di nasello', um: 'PZ', pzcart: 2, peso: 1.6, prezzo: 5.00,  active: true, data: new Date()},
    {codart : '0435431', descrizione: 'Findus crocchette', um: 'PZ', pzcart: 33, peso: 0.5, prezzo: 6.00,  active: true, data: new Date()},
  ]

  constructor() {}
  ngOnInit(): void {
  }

}
