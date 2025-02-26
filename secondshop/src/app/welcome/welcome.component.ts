import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

user: string = "";

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.user = this.route.snapshot.params['userid']
  }

}
