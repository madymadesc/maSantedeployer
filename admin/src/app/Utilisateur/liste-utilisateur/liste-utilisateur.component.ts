import { Component, OnInit } from '@angular/core';
import { MaladieService } from 'src/app/Maladie/Service/maladie.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {

  utlisateur : any;
  utlisateurLength : any;
  maladie:any;
  maladieLength:any;
  search='';
  constructor(
    private service : UtilisateurService,
    private serviceM : MaladieService
    ) { }

  ngOnInit(): void {

    // recupere les utilisateur
    this.service.getAllUtilisateur().subscribe((data:any)=>{
      this.utlisateur = data;
      this.utlisateurLength = this.utlisateur.length;
    })

    // recuperer les maladie
    this.serviceM.listeMaladie().subscribe((data:any)=>{
      this.maladie = data;
      this.maladieLength = this.maladie.length;
  })
  

}
}
