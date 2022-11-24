import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialiteService } from 'src/app/Specialite/Service/specialite.service';
import { MaladieService } from '../Service/maladie.service';

@Component({
  selector: 'app-ajout-maladie',
  templateUrl: './ajout-maladie.component.html',
  styleUrls: ['./ajout-maladie.component.scss']
})
export class AjoutMaladieComponent implements OnInit {

 maladie :any;
 private admin : any;
  constructor(
    private service : MaladieService,
    private router: Router
  ) {
    this.admin = localStorage.getItem('userData');
   }

  ngOnInit(): void {
  }
  ajoutMaladie(form: NgForm){
    form.value.admin = JSON.parse(this.admin);
    this.service.ajoutMaladie(form.value).
    subscribe((data:any)=>{
      this.maladie = data;
      this.router.navigate(['liste-maladie'])
    })

  }

}
