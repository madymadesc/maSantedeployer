import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./Pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./Pages/register/register.module').then( m => m.RegisterPageModule)
  },

  {
    path: 'suivi',
    loadChildren: () => import('./Pages/suivi/suivi.module').then( m => m.SuiviPageModule )
  },
 
  {
    path: 'accueil',
    loadChildren: () => import('./Pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'suivi-tension',
    loadChildren: () => import('./Pages/suivi-tension/suivi-tension.module').then( m => m.SuiviTensionPageModule)
  },
  {
    path: 'suivi-diabete',
    loadChildren: () => import('./Pages/suivi-diabete/suivi-diabete.module').then( m => m.SuiviDiabetePageModule)
  },
  {
    path: 'docteur',
    loadChildren: () => import('./Pages/docteur/docteur.module').then( m => m.DocteurPageModule)
  },
  {
    path: 'rappel',
    loadChildren: () => import('./Pages/rappel/rappel.module').then( m => m.RappelPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./Pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'conseil-sante',
    loadChildren: () => import('./Pages/conseil-sante/conseil-sante.module').then( m => m.ConseilSantePageModule)
  },
  {
    path: 'modifier-profil',
    loadChildren: () => import('./Pages/modifier-profil/modifier-profil.module').then( m => m.ModifierProfilPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./Pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'data-details/:id',
    loadChildren: () => import('./Pages/data-details/data-details.module').then( m => m.DataDetailsPageModule)
  },
  {
    path: 'apropos',
    loadChildren: () => import('./Pages/apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./Pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'conseil/:id',
    loadChildren: () => import('./Pages/conseil/conseil.module').then( m => m.ConseilPageModule)
  },
  {
    path: 'bilan',
    loadChildren: () => import('./Pages/bilan/bilan.module').then( m => m.BilanPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./Pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'ajout-docteur',
    loadChildren: () => import('./Pages/ajout-docteur/ajout-docteur.module').then( m => m.AjoutDocteurPageModule)
  },
  {
    path: 'ajout-patient',
    loadChildren: () => import('./Pages/ajout-patient/ajout-patient.module').then( m => m.AjoutPatientPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./Pages/data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./Pages/details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
