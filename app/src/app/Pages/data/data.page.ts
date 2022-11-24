import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {


  InfoUser: any;
  user :any;
  cp: number = 1;
  filterTerm: string;
  constructor(
    private serviceU : UserService
  ) { }

  ngOnInit() {

    // utilisateur connecter
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

     //les donnees de l'utilisateur
     this.serviceU.userDonnee(this.InfoUser.id).subscribe((data:any)=>{
       this.user = JSON.parse(data);
     })
  }

}
