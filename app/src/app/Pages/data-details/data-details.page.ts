import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './data-details.page.html',
  styleUrls: ['./data-details.page.scss'],
})
export class DataDetailsPage implements OnInit {
  id: any;
  donnee : any;
  InfoUser: any;
  constructor(
    private router : Router,
    private service : UserService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.InfoUser=JSON.parse(localStorage.getItem('user'));

     // un data
    this.id = this.route.snapshot.params['id'];
    this.service.dataDetail(this.id).subscribe((data:any)=>{
      this.donnee = JSON.parse(data);   
    })
  }

  gotToData(){
  this.router.navigate(['data']);
  this.ngOnInit();
}
}
