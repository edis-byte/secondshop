import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { WelcomeComponent } from './modules/welcome/pages/welcome/welcome.component';
import { ErrorComponent } from './modules/error/pages/error/error.component';
import { ArticoliComponent } from './modules/atricoli/pages/articoli/articoli.component';
import { LogoutComponent } from './modules/logout/pages/logout/logout.component';
import { AuthGaurd } from './core/services/route-guard.service';
import { GridArticoliComponent } from './modules/atricoli/pages/grid-articoli/grid-articoli.component';

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
    path: 'articoli', component: ArticoliComponent,  canActivate:[AuthGaurd],
   },
   {
    path: 'articoli/grid', component: GridArticoliComponent,  canActivate:[AuthGaurd],
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
