import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Donnee } from 'src/app/model/donnee';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-suivi-diabete',
  templateUrl: './suivi-diabete.page.html',
  styleUrls: ['./suivi-diabete.page.scss'],
})
export class SuiviDiabetePage implements OnInit {
  rangeVal: string;
  rangeValu:string;
  slider: any = 0.1;
  customSteps: any;

  donnee = new Donnee()
    valeurA:any;
    valeurC:any;
    unite:any;
    diabete:any;
    user:any;
  InfoUser: any;

  constructor(
    public platform: Platform,
    private service: UserService,   
    private router: Router,
    private navCrr : NavController
    ) { 
    this.platform.ready().then(()=>{
      this.rangeVal = "50";
    })
    this.platform.ready().then(()=>{
      this.rangeValu = "0.7"
    })
    this.watchSlider();
    this.user = localStorage.getItem('user');
  }

  watchSlider(){
    const steps = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2];
    this.customSteps = steps[this.slider];
  }

  ngOnInit() {
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
  }
  async calculD(forms:NgForm){


    this.valeurA=forms.value['valeurA'];
    this.valeurC=forms.value['valeurC'];
    this.unite=forms.value['unite'];
    

    this.donnee.valeurA=this.valeurA;
    this.donnee.valeurC=this.valeurC;
    this.donnee.unite=this.unite;
    this.donnee.utilisateur=JSON.parse(this.user);

    this.service.calculDiabete(this.donnee).subscribe((data:any)=>{
      this.diabete=data;
      
      this.router.navigate(['tabs'])
      
    })
    window.location.reload();
   }

}
