import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilService } from '../Service/profil.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.scss']
})
export class ModifierProfilComponent implements OnInit {
  admin:any;
  id :any;
  adminConnect:any;
  profil:any;
  constructor(
    private service : ProfilService,
    public route : ActivatedRoute,
    public router : Router,
  ) { 
    this.admin = localStorage.getItem('userData');
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminConnect = JSON.parse(this.admin);
    this.profil = this.adminConnect;
  }

  updateProfil(){
    this.service.modifierProfil(this.id,this.profil).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['detail-profil']);
    })
    
  }


}
