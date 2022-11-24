import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaladieService } from '../Service/maladie.service';

@Component({
  selector: 'app-modifier-maladie',
  templateUrl: './modifier-maladie.component.html',
  styleUrls: ['./modifier-maladie.component.scss']
})
export class ModifierMaladieComponent implements OnInit {
  id : any;
  maladie : any;

  constructor(
    private service : MaladieService,
    public route : ActivatedRoute,
    public router : Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailMaladie(this.id).subscribe((data:any)=>{
      this.maladie=data;
      
    })
  }
updateMaladie(){
  this.service.modifierMaladie(this.id,this.maladie).subscribe((data:any)=>{
    this.router.navigate(['liste-maladie']);
  })
}

}
