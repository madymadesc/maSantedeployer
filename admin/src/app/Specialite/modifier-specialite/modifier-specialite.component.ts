import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialiteService } from '../Service/specialite.service';

@Component({
  selector: 'app-modifier-specialite',
  templateUrl: './modifier-specialite.component.html',
  styleUrls: ['./modifier-specialite.component.scss']
})
export class ModifierSpecialiteComponent implements OnInit {

  id : any;
  speciale : any;

  constructor(
    private service : SpecialiteService,
    public route : ActivatedRoute,
    public router : Router,
  ) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
    this.service.detailSpecialite(this.id).subscribe((data:any)=>{
      this.speciale=data;
    })
  }
updateSpecia(){
  this.service.modifierSpecialite(this.id,this.speciale).subscribe((data:any)=>{
    console.log(data);
    this.router.navigate(['liste-specialite'])
  })
}
}
