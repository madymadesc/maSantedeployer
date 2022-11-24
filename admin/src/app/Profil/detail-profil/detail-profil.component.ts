import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.scss']
})
export class DetailProfilComponent implements OnInit {
  admin:any;
  adminConnect:any;
  constructor() { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('userData');
    this.adminConnect=JSON.parse(this.admin);
  }
  admine(){
    window.location.reload();
  }
}
