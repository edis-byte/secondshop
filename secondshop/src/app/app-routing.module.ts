import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AtricoliComponent } from './atricoli/atricoli.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurd } from '../services/route-guard.service';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'welcome', component: WelcomeComponent, canActivate:[AuthGaurd],
  },
  {
    path: 'welcome/:userid', component: WelcomeComponent, canActivate:[AuthGaurd],
  },
   {
    path: 'articoli', component: AtricoliComponent,  canActivate:[AuthGaurd],
   },
    {
      path: 'logout', component: LogoutComponent

   },
  {
    path: '**', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
