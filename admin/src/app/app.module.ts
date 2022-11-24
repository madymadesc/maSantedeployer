import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './Login/login/login.component';
import { ListeUtilisateurComponent } from './Utilisateur/liste-utilisateur/liste-utilisateur.component';
import { DetailUtilisateurComponent } from './Utilisateur/detail-utilisateur/detail-utilisateur.component';
import { ListeMedecinComponent } from './Medecin/liste-medecin/liste-medecin.component';
import { DetailMedecinComponent } from './Medecin/detail-medecin/detail-medecin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { DetailProfilComponent } from './Profil/detail-profil/detail-profil.component';
import { ModifierProfilComponent } from './Profil/modifier-profil/modifier-profil.component';
import { AjoutSpecialiteComponent } from './Specialite/ajout-specialite/ajout-specialite.component';
import { ListeSpecialiteComponent } from './Specialite/liste-specialite/liste-specialite.component';
import { ModifierSpecialiteComponent } from './Specialite/modifier-specialite/modifier-specialite.component';
import { ListeMaladieComponent } from './Maladie/liste-maladie/liste-maladie.component';
import { AjoutMaladieComponent } from './Maladie/ajout-maladie/ajout-maladie.component';
import { ModifierMaladieComponent } from './Maladie/modifier-maladie/modifier-maladie.component';
import {NgToastModule} from 'ng-angular-popup';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { DetailDonneeComponent } from './Donnee/detail-donnee/detail-donnee.component';
import { ListeDonneeComponent } from './Donnee/liste-donnee/liste-donnee.component';
import { AjoutConseilComponent } from './Conseil/ajout-conseil/ajout-conseil.component';
import { DetailConseilComponent } from './Conseil/detail-conseil/detail-conseil.component';
import { ListeConseilComponent } from './Conseil/liste-conseil/liste-conseil.component';
import { ModifierConseilComponent } from './Conseil/modifier-conseil/modifier-conseil.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import {PanelModule} from 'primeng/panel';
import {TabViewModule} from 'primeng/tabview';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    ListeUtilisateurComponent,
    DetailUtilisateurComponent,
    ListeMedecinComponent,
    DetailMedecinComponent,
    SideMenuComponent,
    HeaderComponent,
    DetailProfilComponent,
    ModifierProfilComponent,
    AjoutSpecialiteComponent,
    ListeSpecialiteComponent,
    ModifierSpecialiteComponent,
    ListeMaladieComponent,
    AjoutMaladieComponent,
    ModifierMaladieComponent,
    DetailDonneeComponent,
    ListeDonneeComponent,
    AjoutConseilComponent,
    DetailConseilComponent,
    ListeConseilComponent,
    ModifierConseilComponent,
    CorbeilleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgToastModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    PanelModule,
    TabViewModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
