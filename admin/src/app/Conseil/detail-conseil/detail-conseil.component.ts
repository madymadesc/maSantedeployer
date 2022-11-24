import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConseilService } from '../Service/conseil.service';

@Component({
  selector: 'app-detail-conseil',
  templateUrl: './detail-conseil.component.html',
  styleUrls: ['./detail-conseil.component.scss']
})
export class DetailConseilComponent implements OnInit {

  id :any;
  conseil : any;
  img : any;
  constructor(
    private serviceC : ConseilService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.img = this.serviceC.URLPhotoConsiel
    this.id = this.route.snapshot.params['id'];
    this.serviceC.detailConseil(this.id).subscribe((data:any)=>{
      this.conseil=data;
    })
  }

}
