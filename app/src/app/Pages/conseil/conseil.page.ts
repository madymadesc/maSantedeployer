import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-gestes',
  templateUrl: './conseil.page.html',
  styleUrls: ['./conseil.page.scss'],
})
export class ConseilPage implements OnInit {
  id: any;
  conseil: any;
  img: any;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private service : UserService
  ) { }

  ngOnInit() {
    this.img = this.service.URLPhotoConsiel
    // un conseil
    this.id = this.route.snapshot.params['id'];
    this.service.detailConseil(this.id).subscribe((data:any)=>{
      this.conseil = data;
    }) 
  }
  gotToConseils() {
    this.router.navigate(['conseil-sante']);
    this.ngOnInit();

  }
}
