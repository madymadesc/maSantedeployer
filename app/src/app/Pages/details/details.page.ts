import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id : any;
  detail : any
  userData: any;

  constructor(
    private service : UserService,
    private router : Router,
    private route : ActivatedRoute,
    private alertCtrl : AlertController,
  ) { }

  ngOnInit() {

    // un utilisateur
    this.id = this.route.snapshot.params['id'];
    this.service.compteDetail(this.id).subscribe((data:any)=>{
      this.detail=JSON.parse(data);
    }) 
    // user last
    this.service.userData(this.id).subscribe((data:any)=>{
      this.userData = JSON.parse(data);
      // this.maladies = this.userData.maladies;
      // this.resultat = this.userData.resultat;
      // this.couleur = this.userData.couleur;

    })   
  }
  gotToDocteur() {
    this.router.navigate(['docteur']);
    this.ngOnInit();
  }
   // Alert 
   async showAlert(id :any){
    await this.alertCtrl.create({
      header: "Info",
      // subHeader:"PromoCode",
      message:"Pour suprimer un contact glisser le à gauche dans la liste de contact",
       
      buttons:[
        {text:"Ok"
      }
      ]

    }).then(res=> res.present());
    
  }
}



