import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbtron',
  templateUrl: './jumbtron.component.html',
  styleUrl: './jumbtron.component.scss'
})
export class JumbtronComponent implements OnInit {
 @Input()Titolo: string = ""
 @Input()Show: boolean = true
 @Input()Sottotitolo: string = ""

constructor() {}

  ngOnInit(): void {

  }

}
