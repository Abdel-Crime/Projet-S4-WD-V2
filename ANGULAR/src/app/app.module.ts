import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { VoitureComponent } from './component/voiture/voiture.component';
// import { FiltreTachePipe } from './pipe/filtre-tache.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop' ;
import { SignInComponent } from './component/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VoitureComponent,
    // FiltreTachePipe,
    SignInComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}