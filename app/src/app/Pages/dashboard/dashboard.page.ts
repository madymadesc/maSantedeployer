import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  InfoUser: any;
  id: any;
  userContact: any;
  medecinContact: any;

  constructor(
    private route :ActivatedRoute,
    private service :UserService
  ) { }

  ngOnInit() {
    // infomation de l'utilisateur connecte
    this.InfoUser=JSON.parse(localStorage.getItem('user'));
   
    this.id = this.route.snapshot.params['id'];
           
           // list by user
           this.service.getContactByUser(this.InfoUser.id).subscribe((data:any)=>{
             this.userContact = JSON.parse(data);
           })
           // list by medecin
           this.service.getContactByMedecin(this.InfoUser.id).subscribe((data:any)=>{
             this.medecinContact = JSON.parse(data);
           })
  }

}
