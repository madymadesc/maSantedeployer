import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinique',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 4000,
    loop: true,
    autoplay: {
          delay: 5000,
    }
  };

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  gotToLogin(){
    this.router.navigate(['login']);
    this.ngOnInit();
  }
}
