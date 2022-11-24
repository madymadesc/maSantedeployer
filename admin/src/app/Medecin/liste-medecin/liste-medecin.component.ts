import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/Specialite/Service/specialite.service';
import { MedecinService } from '../Service/medecin.service';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.scss']
})
export class ListeMedecinComponent implements OnInit {
medecin:any;
medecin1:any;
specialite:any;
specialite1:any;
search = '';
medecinAll:any;

  constructor(
    private service : MedecinService,
    private specialiteService : SpecialiteService,
    ) { }

  ngOnInit(): void {

    this.service.listUtilisateur().subscribe((data:any)=>{
      this.medecin=data;
      
    })

    this.service.getAllMedecin().subscribe((data:any)=>{
      this.medecinAll=data;
      this.medecin1 = this.medecinAll.length;
    })
    this.specialiteService.listeSpecialite().subscribe((data:any)=>{
      this.specialite = data;
      this.specialite1 = this.specialite.length;
    })
  }
  

}
