import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseilService } from '../Service/conseil.service';

@Component({
  selector: 'app-modifier-conseil',
  templateUrl: './modifier-conseil.component.html',
  styleUrls: ['./modifier-conseil.component.scss']
})
export class ModifierConseilComponent implements OnInit {

  id : any;
  conseil : any;
  constructor(
    private serviceC : ConseilService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.serviceC.detailConseil(this.id).subscribe((data:any)=>{
      this.conseil=data;
      
    })
  }
updatConseil(){
  this.serviceC.modifierConseil(this.id,this.conseil).subscribe((data:any)=>{
    this.router.navigate(['liste-conseil']);
  })
}
}
