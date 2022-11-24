import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialiteService } from '../Service/specialite.service';

@Component({
  selector: 'app-ajout-specialite',
  templateUrl: './ajout-specialite.component.html',
  styleUrls: ['./ajout-specialite.component.scss']
})
export class AjoutSpecialiteComponent implements OnInit {

  specialite :any;
  private admin: any;
  constructor(
    private service : SpecialiteService,
    private router: Router
  ) {
    this.admin = localStorage.getItem('userData');
    console.log(this.admin);
  }

  ngOnInit(): void {
  }
  ajoutSpecilite(form: NgForm){
    form.value.admin = JSON.parse(this.admin);
    this.service.ajoutSpecialite(form.value).
    subscribe((data:any)=>{
      this.specialite = data;
      this.router.navigate(['liste-specialite'])
    })
  }
}
