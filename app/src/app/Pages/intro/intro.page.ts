import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {


  slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
    }
  };

  constructor(private route: Router) { }

  ngOnInit() {
  }
  login() {
    this.route.navigate(['login'])
  }
  register() {
    this.route.navigate(['register'])
  }
}
