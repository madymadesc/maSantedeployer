import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rappel',
  templateUrl: './rappel.page.html',
  styleUrls: ['./rappel.page.scss'],
})
export class RappelPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  gotToAcceuil() {
    this.router.navigate(['tabs']);
    this.ngOnInit();

  }

}
