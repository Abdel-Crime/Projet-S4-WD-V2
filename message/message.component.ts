import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Voiture, Marque } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';
import { ContactService } from 'src/app/service/contact.service';
import { UserService } from 'src/app/service/user.service';
import { Mail } from 'src/app/model/contact';


//import 'src/app/component/CSS/style.css';

@Component({
    selector: 'app-voiture',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
    mail: string = '';
    recup_mail_html: string = '';
    text: string = '';
    recup_text_html: string = '';
    recup_mail_liste: Array<Mail> = [];

    constructor(private VoitureService: VoitureService, private router: Router, private userService: UserService,private ContactService:ContactService) { }
  
    ngOnInit(): void {
  
    this.ContactService.load().subscribe({
        next: (data: any) => {
            // Parcourir toutes les données reçues
            for (const item of data) {
              
              console.log(item);
              this.recup_mail_liste.push(item)
            }
          },
    });
    
  }
  supprimer(mail: Mail,ListeHere: Array<Mail>): void {
    console.log("Supression en cours")
    this.ContactService.Delete(mail).subscribe({
      next: (data) => {
        //recup_mail_liste = recup_mail_liste.filter(t => mail._id != t._id);
        
        this.recup_mail_liste = this.recup_mail_liste.filter(mail => mail._id !== data._id);
       
      }
    });

  }
}