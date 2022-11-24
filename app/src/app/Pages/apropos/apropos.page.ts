import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {
  public apropos: any[]=[
    {titleA: 'Condition D\'utilisation',
    title1: 'Ouverture du compte', 
    corp1:'L\'ouverture du compte est libre à toute personne le desirant.',
    title2: 'Fermeture du compte', 
    corp2:'le compte de l\'utilisateur peut être fermer à la demande de l\'utilisateur ou par l\Administrateur si le compte n\'a pas été utiliser pendant plus 2 ans.  ',
    title3:'Securité des Données',
    corp3:'Vos données de Bilan de santé sont totalement confidentielles et en aucun cas ne peuvent être divulguées par notre application.'
  },
    {title1: 'Version',corp1:'version 0.0.1'},

    
  ]
  constructor() { }

  
  ngOnInit() {
  }

}
