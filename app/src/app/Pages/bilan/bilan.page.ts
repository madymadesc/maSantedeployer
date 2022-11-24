import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profilephotooption',
  templateUrl: './bilan.page.html',
  styleUrls: ['./bilan.page.scss'],
})
export class BilanPage implements OnInit {

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
  constructor(
    private router : Router,
    private userService: UserService 
    ) { }

  ngOnInit() {
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

    this.userInfo = this.InfoUser;
  this.userService.userData(this.userInfo.id).subscribe((data:any)=>{
    this.userData = JSON.parse(data);
    this.maladies = this.userData.maladies;
    this.resultat = this.userData.resultat;
    this.couleur = this.userData.couleur;

  })
  }

 
  gotToAcceuil() {
    this.router.navigate(['tabs']);
    this.ngOnInit();

  }

  

}
