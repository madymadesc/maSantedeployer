import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/Utilisateur/Service/utilisateur.service';
import { MedecinService } from '../Service/medecin.service';

@Component({
  selector: 'app-detail-medecin',
  templateUrl: './detail-medecin.component.html',
  styleUrls: ['./detail-medecin.component.scss']
})
export class DetailMedecinComponent implements OnInit {

  id:any;
  medecin:any;
  constructor(
    private service :MedecinService,
    private route : ActivatedRoute,
    private router :Router,
    private userService : UtilisateurService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailMedecin(this.id).subscribe((data:any)=>{
      this.medecin=data;
    })

  }
  changeEtat(){
    this.userService.disableCompte(this.id).subscribe((data:any)=>{
      this.router.navigate(['detail-medecin']);
    })
    this.userService.enableCompte(this.id).subscribe((data:any)=>{
      this.router.navigate(['detail-medecin']);
    })
    window.location.reload();

  }
  

}
