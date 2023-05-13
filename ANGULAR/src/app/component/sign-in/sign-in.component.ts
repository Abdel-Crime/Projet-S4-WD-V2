import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque, Voiture } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { NgModule } from '@angular/core';





@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
 // styleUrls: ['./taches.component.css'],
  
})
export class SignInComponent{
  erreur:boolean=false
  anti_erreur:boolean=false

    user: User = {
      login: '',
      password: '',
    };
    
    constructor(private userService: UserService, private router: Router) {

    }
    submit():void {
     
      this.userService.signIn2(this.user).subscribe({
        next: () => {
          this.anti_erreur=true
          this.erreur = false
          this.router.navigate(['signIn'])
         // console.log("Compte")
        
       },
       error: () => { this.erreur = true; }
      });

      
  }

}