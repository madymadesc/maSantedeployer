import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AproposPageRoutingModule } from './apropos-routing.module';

import { AproposPage } from './apropos.page';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AproposPageRoutingModule
  ],
  declarations: [AproposPage]
})
export class AproposPageModule {
  public pages: any[] = [
    {title: 'Accueil', url: '/tabs', icon: 'home',image:'../assets/iconImage/home.png'},
    {title: 'Données', url: '/data', icon: 'person', image:'../assets/iconImage/database.png',user:true},
    {title: 'Conseils', url: '/conseil-sante', icon: 'information-circle',image:'../assets/iconImage/pharmacy.png'},
    {title: 'Medecins', url: '/docteur', icon: 'person', image:'../assets/iconImage/doctor.png',user1:'UTILISATEUR'},
    // {title: 'Patients', url: '/docteur', icon: 'person', image:'../assets/iconImage/account.png',user1:'MEDECINS'},
    {title: 'A propos', url: '/dd', icon: 'person', image:'../assets/iconImage/about.png'},
    {title: 'Déconnexion', url: '', icon: 'log-out', image:'../assets/iconImage/logout.png', route: true},
  ];
  InfoUser :any;
  a= 'ddd';
  constructor(
    private router : Router
  ) {}

  ngOnInit() {
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
    }

  signOut() {
    localStorage.removeItem('user');
    window.location.href="/";
    history.forward();
  }
}
