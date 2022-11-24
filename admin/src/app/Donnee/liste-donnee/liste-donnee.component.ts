import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Utilisateur/Service/utilisateur.service';
import { DonneeService } from '../Service/donnee.service';

@Component({
  selector: 'app-liste-donnee',
  templateUrl: './liste-donnee.component.html',
  styleUrls: ['./liste-donnee.component.scss']
})
export class ListeDonneeComponent implements OnInit {

  search='';
  allDonnee : any;
  allDonne : any;

  utlisateur : any;
  user: any;
  usern =[];
  constructor(
    private serviceU : UtilisateurService,
    private service : DonneeService
  ) { }

  ngOnInit(): void {
    this.service.getAllDonnee().subscribe((data:any)=>{
      this.allDonne = data;
      this.usern = this.allDonne.resultat
      console.log("alldonne",this.usern)
    })
    this.serviceU.getAllUtilisateur().subscribe((data:any)=>{
      this.allDonnee = data;
    })
  }

}
