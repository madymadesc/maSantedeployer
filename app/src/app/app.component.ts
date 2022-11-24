import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any[] = [
    { title: 'Accueil', url: '/tabs', icon: 'home', image: '../assets/iconImage/home.png' },
    { title: 'Données', url: '/data', icon: 'person', image: '../assets/iconImage/database.png', user: true },
    { title: 'Conseils', url: '/conseil-sante', icon: 'information-circle', image: '../assets/iconImage/pharmacy.png' },
    { title: 'Medecins', url: '/docteur', icon: 'person', image: '../assets/iconImage/doctor.png', user1: 'UTILISATEUR' },
    { title: 'A propos', url: '/apropos', icon: 'person', image: '../assets/iconImage/about.png' },
    { title: 'Déconnexion', url: '', icon: 'log-out', image: '../assets/iconImage/logout.png', route: true },
  ];

  public medecin: any[] = [
    { title: 'Accueil', url: '/dashboard', icon: 'home', image: '../assets/iconImage/home.png' },
    { title: 'Conseils', url: '/conseil-sante', icon: 'information-circle', image: '../assets/iconImage/pharmacy.png' },
    { title: 'Patients', url: '/docteur', icon: 'person', image: '../assets/iconImage/account.png', user1: 'MEDECINS' },
    { title: 'A propos', url: '/apropos', icon: 'person', image: '../assets/iconImage/about.png' },
    { title: 'Déconnexion', url: '', icon: 'log-out', image: '../assets/iconImage/logout.png', route: true },
  ]
  public InfoUser: any;
  constructor(
    private router: Router,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.InfoUser = JSON.parse(localStorage.getItem('user'));
    if (this.InfoUser) {
      // this.router.navigateByUrl('/tabs');
      if(this.InfoUser.Type === 'UTILISATEUR'){
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
        this.router.navigate(['tabs']));
      }else if(this.InfoUser.Type === 'MEDECIN'){
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
        this.router.navigate(['dashboard']));
      }
    }
  }

  signOut() {
    localStorage.removeItem('user');
    window.location.href = "/";
  }

  toggleTheme(event){
    console.log(event);
    
  }
}
