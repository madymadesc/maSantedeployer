import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  user = new User();
  
  donnee :any;
  utilisateur:any;
  exist : any;
  nomComplet:any;
  email:any;
  mobile:any;
  adresse:any;
  motDePasse:any;
  dateDeNaissance:any;
  specialite:any;
  Type:any;


  constructor(
    private _service: UserService,   
    private router: Router,
    private navCrr : NavController
    ) { }



  custom = {
    centeredSlides: false,
    slidesPerView: 4.5,
  }


  ngOnInit(): void {}

  login(){
    console.log('button cliquez')
    this.router.navigate(['login'])
  }

  // registerUser(data: any){
  //   console.log("this user=====",data.value);
  //    let valeur=JSON.stringify(data.value);
  //    let b= JSON.parse(valeur)
  //    this._service.registerUserFromRemote(b).subscribe(res =>{
  //      console.log(res);
       
  //    })
  //  }

   //------------------ggggg----------------
   async SaveData(forms:NgForm){
    //  var transformJson = JSON.stringify(this._service.creerCompte(forms.value));
    //  var add = JSON.parse(transformJson);
    //  console.log(add);
    //  return add;
    this.nomComplet=forms.value['nomComplet'];
    this.Type=forms.value['Type'];
    this.email=forms.value['email'];
    this.mobile=forms.value['mobile'];
    this.adresse=forms.value['adresse'];
    this.motDePasse=forms.value['motDePasse'];
    this.dateDeNaissance=forms.value['dateDeNaissance'];
    this.specialite=forms.value['specialite'];

    this.user.nomComplet=this.nomComplet;
    this.user.Type=this.Type;
    this.user.email=this.email;
    this.user.mobile=this.mobile;
    this.user.adresse=this.adresse;
    this.user.motDePasse=this.motDePasse;
    this.user.dateDeNaissance=this.dateDeNaissance;
    this.user.specialite=this.specialite;
    this._service.creerCompte(this.user).subscribe((data:any)=>{
      this.donnee=data;
      console.log("salut"+ data)
      // this.router.navigate(['login'])
      this.navCrr.navigateForward(['login']);
    })
    // this.utilisateur= await this._service.creerCompte(this.user).toPromise();    
    //   if(!this.utilisateur){
    //     console.log("if------------------", this.utilisateur);
    //     this.router.navigate(['register']);
    //     alert("verifier vos donnee")
        
    //   }else{        
    //       console.log("else------------------", this.utilisateur);
    //       this.router.navigate(['/login'])
        
        
    //   }
   
   }

}
