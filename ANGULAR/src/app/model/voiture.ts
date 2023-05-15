export interface Voiture {
    _id?: string;
    marque: string;
    modele: string;
}
  

export interface Marque {
    nom: string;
    voiture : Array<Voiture>;
}
