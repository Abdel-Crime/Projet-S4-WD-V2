import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Voiture, Marque } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/service/voiture.service';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-voiture',
  templateUrl: './voitureModif.component.html',
  styleUrls: ['./voitureModif.component.css']
})

export class VoitureModifComponent implements OnInit {

  nom: string = "";
  baseMarque: Array<String> = [];
  recup_voiture: Array<Voiture> = [];
  recup_marque: Array<string> = [];
  filter: Array<string> = [];
  Liste_Marque: Array<Marque> = [];
  titreU: string = '';
  titreA: string = '';
  titreC: string = '';
  titreT: string = '';
  NouvelleVoiture: Voiture = {
    marque: '',
    modele: '',
    millesime: '',
    motorisation: '',
    desc: ''
  };
  marque: string = '';
  recup_marque_html: string = '';
  modele: string = '';
  recup_modele_html: string = '';

  constructor(private VoitureService: VoitureService, private router: Router, private userService: UserService,private location: Location) { }

  ngOnInit(): void {

    
    let parcours_taches = 0
    this.VoitureService.getVoiture().subscribe({
      next: (data: Array<Voiture>) => {
        data.forEach(element => {
          if (this.recup_marque.includes(element.marque) === false) {
            this.recup_marque.push(element.marque);
            console.log("Rentre dans le push")
            console.log(element.marque)
          }
          else {
            console.log("Statut deja dans le tableau")
          }

          console.log("Ici les statut recup :" + this.recup_marque + "Fin tableau")
        });

        this.recup_marque.forEach(element2 => {
          let titre = element2


          data.forEach(element3 => {
            if (element3.marque === element2) {
              this.recup_voiture.push(element3)
            }

          });
          this.ajouterNewListe(element2, 0, this.recup_voiture)
          this.recup_voiture = []
        });

      }
    });

  }

  ajouterNewListe(Marque: string, testAjout: number, RecupVoiture: Array<Voiture>) {
    if (testAjout == 0) {
      let NouvelleListe: Marque = {
        nom: Marque,
        voiture: RecupVoiture,
      }
      console.log("Apparition liste sauvegardé?")
      this.Liste_Marque.push(NouvelleListe);
      this.filter.push(NouvelleListe.nom)
    }
    else {
      let NouvelleListe: Marque = {
        nom: Marque,
        voiture: RecupVoiture,
      }
      NouvelleListe.nom = this.titreU
      this.Liste_Marque.push(NouvelleListe);
      console.log(this.Liste_Marque)
      this.filter.push(NouvelleListe.nom)
    }
  }

  ajouter() {
    console.log("Nouveau titre?")
    console.log(this.marque + ' '+this.modele)
    let NouvelleVoiture: Voiture = {
      marque: this.marque,

      modele: this.modele,
      millesime: '',
      motorisation: '',
      desc: '',

    };
    this.VoitureService.ajoutVoiture(NouvelleVoiture).subscribe({
      next: (data: Voiture) => {
        let marqueExist = false;
         // Vérifier si la marque de la voiture existe déjà dans la liste
      for (const element of this.recup_marque) {
        if (element === NouvelleVoiture.marque) {
          marqueExist = true;
          break;
        }
      }
      if (!marqueExist) {
        this.recup_marque.push(NouvelleVoiture.marque);
        console.log("Nouvelle marque ajoutée : " + NouvelleVoiture.marque);
      } else {
        console.log("La marque existe déjà : " + NouvelleVoiture.marque);
      }

      for (const marque of this.recup_marque) {
        if (NouvelleVoiture.marque === marque) {
          this.recup_voiture.push(NouvelleVoiture);
          break;
        }
      }
      //ListeHere.voiture = ListeHere.voiture.filter(t => voiture._id != t._id);
      this.recup_marque = [];
      this.recup_voiture = [];
     
      }
    });

  }
  supprimer(voiture: Voiture,ListeHere: Marque): void {
    console.log("Supression en cours")
    this.VoitureService.removeVoiture(voiture).subscribe({
      next: (data) => {
        ListeHere.voiture = ListeHere.voiture.filter(t => voiture._id != t._id);
      }
    });

  }

}

  // this.VoitureService.ajoutVoiture(this.NouvelleVoiture).subscribe({
  //   next: (data:Voiture) => {
  //      NouvelleVoiture.marque=this.titreU
  //      NouvelleVoiture.marque=ListeHere.nom
  //      console.log("Modele de la voiture:" + NouvelleVoiture.modele)
  //      console.log(data)

  //      ListeHere.voiture.push(data);


  //   }
  // });
  



