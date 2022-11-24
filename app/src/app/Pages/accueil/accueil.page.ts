import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public users: User[];
  InfoUser: any;
  dernierDonneee : any;
  userData :any;
  userInfo :any;
  mali: any;
  compteDetail : any;
  //====================
  maladies : any;
  resultat : any;
  couleur : any;

  //====================
  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

    this.userService.compteDetail(this.InfoUser.id).subscribe((data:any)=>{
      this.compteDetail = JSON.parse(data);
      
    })

    this.userService.resultat().subscribe((data:any)=>{
      this.dernierDonneee = data;

    })

    this.userInfo = this.InfoUser;
    this.userService.userData(this.userInfo.id).subscribe((data:any)=>{
      this.userData = JSON.parse(data);
      this.maladies = this.userData.maladies;
      this.resultat = this.userData.resultat;
      this.couleur = this.userData.couleur;

    })
  }
  
  


}
