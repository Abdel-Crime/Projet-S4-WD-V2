import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Voiture, Marque } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';
import { UserService } from 'src/app/service/user.service';
import { ContactService } from 'src/app/service/contact.service';
import axios from 'axios';
import { Mail } from 'src/app/model/contact';
//import 'src/app/component/CSS/style.css';

@Component({
    selector: 'app-voiture',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

    email :string='';
    message :string='';
    recup_email:string='';
    recup_message:string='';
    data: Mail = {
        mail : '',
       message : '',
      };
    alert:boolean=false;
    
    constructor(private ContactService: ContactService, private router: Router, private userService: UserService) { }
  
    ngOnInit(): void {
  
      
        console.log("Affichage Contact")
    
  }
  sendEmail() {
    console.log("dans le sendEmail")
    // Créer un objet avec les détails de l'e-mail
    let data2: Mail = {
        mail : this.email,
       message : this.message,
      };
    console.log("Here is the mail"+this.email+' '+this.message)
    this.ContactService.save(data2).subscribe({})
    this.alert=true;
}
}
    

