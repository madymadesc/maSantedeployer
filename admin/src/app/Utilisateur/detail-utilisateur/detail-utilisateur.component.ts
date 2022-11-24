import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from 'src/app/Medecin/Service/medecin.service';
import { UtilisateurService } from '../Service/utilisateur.service';

@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.scss']
})
export class DetailUtilisateurComponent implements OnInit {

  id:any;
  user:any;
  constructor(
    private userService : UtilisateurService,
    private service :MedecinService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.detailMedecin(this.id).subscribe((data:any)=>{
      this.user=data;
    })

  }

  changeEtat(){
    this.userService.disableCompte(this.id).subscribe((data:any)=>{
      this.router.navigate(['detail-utilisateur'])
    })

    this.userService.enableCompte(this.id).subscribe((data:any)=>{
      this.router.navigate(['detail-utilisateur'])
    })

    window.location.reload();

}
}
