import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.page.html',
  styleUrls: ['./modifier-profil.page.scss'],
})
export class ModifierProfilPage implements OnInit {
 
  userDonne : any;
  updateProfile:any;
  infoUser : any;
  id: any;
  constructor(
    private service : UserService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.infoUser = JSON.parse(localStorage.getItem('user'));

  
    this.service.compteDetail(this.infoUser.id).subscribe((data:any)=>{
      this.userDonne = JSON.parse(data);           
    })
    
  }

  modifierCompte(){
    this.service.modifierProfil(this.infoUser.id,this.userDonne).subscribe((data:any)=>{
     console.log('update',data);
     this.router.navigate(['profile']);
     
    })
  }

}
