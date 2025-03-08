import { Injectable } from '@angular/core';
import { IArticoli } from '../../shared/models/articoli';

@Injectable({
  providedIn: 'root'
})
export class ArticoliService {

 articoli : IArticoli[] = [
  {codart: '014600301', descrizione: 'Barilla farina 1 kg', um :'PZ', pzcart: 24 , peso: 1, prezzo: 1.09,  active: true,  data: new Date(), imageUrl:'assets/images/prodotti/014600301.jpg' },
  {codart: '013500121', descrizione: 'barilla pasta gr.500 n.70 1/2 penne', um :'PZ', pzcart:30 , peso:0.5, prezzo:3,  active: true,  data: new Date(), imageUrl:'assets/images/prodotti/013500121.jpg' },
  {codart: '014649001', descrizione: 'barilla penne rigate 500 gr', um :'PZ', pzcart:12 , peso:0.5, prezzo:4,  active: true,  data: new Date(), imageUrl:'assets/images/prodotti/014649001.jpg' },
  {codart: '007686402', descrizione: 'findus diori di nasello 30 gr', um :'PZ', pzcart:8 , peso: 0.3, prezzo:4,  active: true,  data: new Date(), imageUrl:'assets/images/prodotti/007686402.jpg' },
  {codart: '057549001', descrizione: 'findus croccante 400 gr', um :'PZ', pzcart:12 , peso: 0.14, prezzo:4,  active: true,  data: new Date(), imageUrl:'assets/images/prodotti/057549001.jpg'},
 ]

  constructor() { }
  getArticoli = () : IArticoli[] => this.articoli;

  getArticoliByCode = (codart: string) : IArticoli => {
    const index = this.articoli.findIndex(articoli => articoli.codart === codart)
    return this.articoli[index]
 
  }
}


