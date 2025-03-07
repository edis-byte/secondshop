import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

userId: string = "Edysse"
password: string = ""

titolo: string = "Accesso e registrazione"
sottotitolo: string = "Procedi per inserire la userId e la password"
authenticate: boolean = true;
// consentito: boolean = false
errMsg: string = "Nome utente o password errati. Riprovare!"
// okMsg: string = "Credenziali corrette"

  constructor (private route: Router, private basicAuth: AuthappService) {}
  ngOnInit(): void {
    
  }

  gestAuth = ( ) : void => {
    console.log(this.userId)
    if(this.basicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId])
        this.authenticate = true
        // this.consentito = true

    } else {
      
      this.authenticate = false
      // this.consentito = false
    }
  }
}
