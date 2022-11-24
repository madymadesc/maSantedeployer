import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-conseil-sante',
  templateUrl: './conseil-sante.page.html',
  styleUrls: ['./conseil-sante.page.scss'],
})
export class ConseilSantePage implements OnInit {


  InfoUser: any;
  img: any;
  list: any;

  constructor(
    private serviceU : UserService
  ) { }

  ngOnInit() {

       // utilisateur connecter
       this.InfoUser=JSON.parse(localStorage.getItem('user'));
       // les conseils
       this.img = this.serviceU.URLPhotoConsiel
    this.serviceU.listeConseilActive().subscribe((data:any)=>{
      this.list = data;
    })
  }

}
