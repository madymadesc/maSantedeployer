import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  admin:any;
  adminConnect:any;
  Aujor = new Date();
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('userData');
    this.adminConnect=JSON.parse(this.admin)
  }
  profil(){
    this.service.goToProfil();
  }
}
