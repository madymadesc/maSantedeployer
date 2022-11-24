import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  displayModal: boolean | undefined;
  displayBasic: boolean | undefined;
  mobile : any;
  motDePasse : any;
  exist: any;
  constructor(
    private service : LoginService, 
    private route : Router,
    private toast: NgToastService,
    ) { }

  ngOnInit(): void {
  }

  connexion(formu:any){
    this.service.verifier(formu.value.mobile, formu.value.motDePasse)
    .subscribe(
      (data:any)=>{
        console.log(formu);
        this.exist=formu;
        this.toast.success({detail:"Success Message",summary:"Login success",duration:5000})
        if(data!=null){
          localStorage.setItem('userData', JSON.stringify(data))
          this.service.goToAccueil();
        }
      },err=>{
        this.toast.error({detail:"Error Message",summary:"Login failed try later !!",duration:5000})
      }
    )
  }

  showModalDialog() {
    this.displayModal = true;
}
showBasicDialog() {
  this.displayBasic = true;
}


}
