import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { IsSignedInGuard } from './is-signed-in-guard';

const routes: Routes = [
  {
    path: '',
    component: VoitureComponent
  },
  {
    path: 'voiture.component.html',
    component: VoitureComponent,
    // canActivate: [IsSignedInGuard]

  },
  {
    path:'signIn',
    component:SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }