import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica = (userId: string, password: string): boolean => {
    var retVal = (userId === 'Edysse' && password === '123_Stella') ? true : false;
    if (retVal && this.isBrowser()) {
      localStorage.setItem("Utente", userId);
    }
    return retVal;
  }


  legged = (): string | null => {
    return (this.isBrowser() && localStorage.getItem("Utente")) ? localStorage.getItem("Utente") : "";
  }

  loggedUser = (): boolean | null => {
    return (this.isBrowser() && localStorage.getItem("Utente")) ? true : false;
  }

  clearUser = () : void => localStorage.removeItem("Utente")
  clearAll = () : void => localStorage.clear()

  // Aggiungi una funzione per verificare che il codice venga eseguito nel browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

}
