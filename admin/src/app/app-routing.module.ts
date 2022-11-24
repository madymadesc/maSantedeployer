import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutConseilComponent } from './Conseil/ajout-conseil/ajout-conseil.component';
import { DetailConseilComponent } from './Conseil/detail-conseil/detail-conseil.component';
import { ListeConseilComponent } from './Conseil/liste-conseil/liste-conseil.component';
import { ModifierConseilComponent } from './Conseil/modifier-conseil/modifier-conseil.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { DetailDonneeComponent } from './Donnee/detail-donnee/detail-donnee.component';
import { ListeDonneeComponent } from './Donnee/liste-donnee/liste-donnee.component';
import { LoginComponent } from './Login/login/login.component';
import { AjoutMaladieComponent } from './Maladie/ajout-maladie/ajout-maladie.component';
import { ListeMaladieComponent } from './Maladie/liste-maladie/liste-maladie.component';
import { ModifierMaladieComponent } from './Maladie/modifier-maladie/modifier-maladie.component';
import { DetailMedecinComponent } from './Medecin/detail-medecin/detail-medecin.component';
import { ListeMedecinComponent } from './Medecin/liste-medecin/liste-medecin.component';
import { DetailProfilComponent } from './Profil/detail-profil/detail-profil.component';
import { ModifierProfilComponent } from './Profil/modifier-profil/modifier-profil.component';
import { AjoutSpecialiteComponent } from './Specialite/ajout-specialite/ajout-specialite.component';
import { ListeSpecialiteComponent } from './Specialite/liste-specialite/liste-specialite.component';
import { ModifierSpecialiteComponent } from './Specialite/modifier-specialite/modifier-specialite.component';
import { DetailUtilisateurComponent } from './Utilisateur/detail-utilisateur/detail-utilisateur.component';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  
  // Gestion Utilisateurs
  { path: 'liste-utilisateur', component: ListeUtilisateurComponent },
  { path: 'detail-utilisateur/:id', component: DetailUtilisateurComponent },

  // Gestion Medecin
  { path: 'liste-medecin', component: ListeMedecinComponent },
  { path: 'detail-medecin/:id', component: DetailMedecinComponent },

  //Gestion du profil
  { path: 'modifier-profil/:id', component:ModifierProfilComponent },
  { path: 'detail-profil', component:DetailProfilComponent },

   //Gestion du specialite
   { path: 'ajout-specialite', component:AjoutSpecialiteComponent},
   { path: 'liste-specialite', component:ListeSpecialiteComponent},
   { path: 'modifier-specialite/:id', component:ModifierSpecialiteComponent },

   //Gestion du maladie
   { path: 'ajout-maladie', component:AjoutMaladieComponent},
   { path: 'liste-maladie', component:ListeMaladieComponent},
   { path: 'modifier-maladie/:id', component:ModifierMaladieComponent },

   //Gestion du Conseil
   { path: 'ajout-conseil', component:AjoutConseilComponent},
   { path: 'liste-conseil', component:ListeConseilComponent},
   { path: 'modifier-conseil/:id', component:ModifierConseilComponent },
   { path: 'detail-conseil/:id', component:DetailConseilComponent },

   //Gestion du Data
   { path: 'liste-donnee', component:ListeDonneeComponent},
   { path: 'detail-donnee/:id', component:DetailDonneeComponent },

    //Corbeille
    { path: 'corbeille', component:CorbeilleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
