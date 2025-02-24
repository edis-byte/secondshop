import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

userId: string = "Edysse"
password: string = ""

authenticate: boolean = true;
consentito: boolean = false
errMsg: string = "Nome utente o password errati. Riprovare!"
okMsg: string = "Credenziali corrette"

  constructor () {}
  ngOnInit(): void {
    
  }

  gestAuth = ( ) : void => {
    console.log(this.userId)
    if(this.userId === "Edysse" && this.password === "123_Stella") {
        this.authenticate = true
        this.consentito = true

    } else {
      
      this.authenticate = false
      this.consentito = false
    }
  }
}
