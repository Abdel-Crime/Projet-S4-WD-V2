export interface Voiture {
    _id?: string;
    marque: string;
    modele: string;
    millesime: string;
    motorisation: string;
    desc:string;
}
  

export interface Marque {
    nom: string;
    voiture : Array<Voiture>;
}
