import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from 'src/app/Medecin/Service/medecin.service';
import { DonneeService } from '../Service/donnee.service';

@Component({
  selector: 'app-detail-donnee',
  templateUrl: './detail-donnee.component.html',
  styleUrls: ['./detail-donnee.component.scss']
})
export class DetailDonneeComponent implements OnInit {

  id : any;
  user : any;
  userU : any;
  search = '';
  constructor(
    private serviceDonnee : DonneeService,
    private route : ActivatedRoute,
    private serviceM : MedecinService
  ) { }

  ngOnInit(): void {
    //les donnees d'un utilisateur
    this.id = this.route.snapshot.params['id'];
    this.serviceDonnee.userDonnee(this.id).subscribe((data:any)=>{
      this.user=data;
    })
    // un utilisateur
    this.id = this.route.snapshot.params['id'];
    this.serviceM.detailMedecin(this.id).subscribe((data:any)=>{
      this.userU=data;
      console.log(this.userU)
    })
  }

}
