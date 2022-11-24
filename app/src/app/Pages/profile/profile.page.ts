import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/service/user.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  subjects: ({ name: string; img?: undefined; } | { img: string; name: string; })[];
  public users: User[];
  InfoUser: any;

  profil : any;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.InfoUser=JSON.parse(localStorage.getItem('user'));

    this.userService.compteDetail(this.InfoUser.id).subscribe((data:any)=>{
      this.profil = JSON.parse(data);

    })

  }

}
