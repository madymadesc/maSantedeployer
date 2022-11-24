import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MedecinService } from '../Medecin/Service/medecin.service';
import { UtilisateurService } from '../Utilisateur/Service/utilisateur.service';
import { PrimeNGConfig } from 'primeng/api';
// import { Table } from 'primeng/table';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // @ViewChild('dt') dt : Table |undefined;

  formateur:any;
  items:any;
  isAuth = false;
  Aujor = new Date();
  noon:any;
  user:any;
  medec:any;
  search = '';
  constructor(
    private service : MedecinService, 
    private serviceUser : UtilisateurService,
    private toast :ToastrService,
    private primengConfig: PrimeNGConfig,
    ) { }

  ngOnInit(): void {
  this.service.listUtilisateur().subscribe((data:any)=>{
    this.formateur=data
    this.noon = data.length - 1;
  })
  //medecin
  this.service.getAllMedecin().subscribe((data:any)=>{
    this.medec=data.length
  })
  
  //Utilisateur
  this.serviceUser.getAllUtilisateur().subscribe((data:any)=>{
    this.user=data.length
  })

 

}

showsToastr(){
  this.showsToastr();
  

  this.primengConfig.ripple = true;
  this.toast.success('Bienvenue sur le Dashboard')
}

}
