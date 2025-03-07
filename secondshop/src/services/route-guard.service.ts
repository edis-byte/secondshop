import { inject, Injectable } from '@angular/core';
import { AuthappService } from './authapp.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(private basicAuth: AuthappService, private route:Router ) { }
  canActive (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.basicAuth.loggedUser()) {
      console.log("Accesso non eseguito")
      this.route.navigate(['login'])
      return false
    }
    else {
      return true
    }
  }
}

export const AuthGaurd: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(RouteGuardService).canActive(next, state)
}