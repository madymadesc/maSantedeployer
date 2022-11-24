import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.page.html',
  styleUrls: ['./suivi.page.scss'],
})
export class SuiviPage implements OnInit {
  user = new User();
  nomComplet: any;
  email: any;
  mobile: any;
  adresse: any;
  motDePasse: any;
  dateDeNaissance: any;
  specialite: any;
  Type: any;
  suivie: any;

  InfoUser: any;
  id: any;
  use: any;
  userData: any;

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private navCrr: NavController
  ) { }


  ngOnInit(): void {
    this.InfoUser = JSON.parse(localStorage.getItem('user'));


  }


  gotToprofile() {
    this.router.navigate(['profile']);
    this.ngOnInit();

  }

  // ================

  async updateSpecia() {
    this.id = this.InfoUser.id;
    this.nomComplet = this.InfoUser.nomComplet;
    this.suivie = 'DIABETE';
    this.Type = this.InfoUser.Type;
    this.email = this.InfoUser.email;
    this.mobile = this.InfoUser.mobile;
    this.adresse = this.InfoUser.adresse;
    this.motDePasse = this.InfoUser.motDePasse;
    this.dateDeNaissance = this.InfoUser.dateDeNaissance;

    this.user.id = this.id;
    this.user.nomComplet = this.nomComplet;
    this.user.suivie = this.suivie;
    this.user.Type = this.Type;
    this.user.email = this.email;
    this.user.mobile = this.mobile;
    this.user.adresse = this.adresse;
    this.user.motDePasse = this.motDePasse;
    this.user.dateDeNaissance = this.dateDeNaissance;

    await this.service.modifierProfil(this.id, this.user).subscribe((data: any) => {
      this.gotToprofile();
    })
    window.location.reload();

  }
  async tension() {
    this.id = this.InfoUser.id;
    this.nomComplet = this.InfoUser.nomComplet;
    this.suivie = 'TENSION';
    this.Type = this.InfoUser.Type;
    this.email = this.InfoUser.email;
    this.mobile = this.InfoUser.mobile;
    this.adresse = this.InfoUser.adresse;
    this.motDePasse = this.InfoUser.motDePasse;
    this.dateDeNaissance = this.dateDeNaissance;

    this.user.id = this.id;
    this.user.nomComplet = this.nomComplet;
    this.user.suivie = this.suivie;
    this.user.Type = this.Type;
    this.user.email = this.email;
    this.user.mobile = this.mobile;
    this.user.adresse = this.adresse;
    this.user.motDePasse = this.motDePasse;
    this.user.dateDeNaissance = this.dateDeNaissance;

    await this.service.modifierProfil(this.id, this.user).subscribe((data: any) => {
      this.gotToprofile();
    })
    window.location.reload();

  }
}
