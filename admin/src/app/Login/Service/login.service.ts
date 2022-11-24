import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host: String ='http://localhost:8088/masante/api/test/';

  constructor(private http : HttpClient,private route: Router) { }

  //Methodde de connexion
public verifier(mobile:any, motDePasse:string):Observable<any>{
  return this.http.get(this.host+"connexionAdmin/"+mobile+"&"+motDePasse)
}

//Methode de connexion Email
public verifierEmail(email:any, motDePasse:string):Observable<any>{
  return this.http.get(this.host+"connexionAdminEmail/"+email+"&"+motDePasse)
}

public setMobile(mobile: string){
  localStorage.setItem("mobile", mobile)
}
public getMobile(){
  return localStorage.getItem("mobile")
}

public setEmail(email: string){
  localStorage.setItem("email", email)
}
public getEmail(){
  return localStorage.getItem("email")
}

public setMotDePasse(motDePasse: string){
  localStorage.setItem("motDePasse", motDePasse)
}
public getMotDePasse(){
  return localStorage.getItem("motDePasse")
}


  //Methodde de navigation
  goToAccueil(){
    this.route.navigateByUrl('accueil')
  }

  goToMedecin(){
    this.route.navigate(['liste-medecin'])
  }

  goToProfil(){
    this.route.navigate(['detail-profil'])
  }
  goToUtlisateur(){
    this.route.navigate(['liste-utilisateur'])
  }
  goToMaladie(){
    this.route.navigate(['liste-maladie'])
  }
  goToSpecialite(){
    this.route.navigate(['liste-specialite'])
  }

  goToAjoutSp(){
    this.route.navigate(['ajout-specialite'])
  }

  goToAjoutMala(){
    this.route.navigate(['ajout-maladie'])
  }

  goToAjoutConseil(){
    this.route.navigate(['ajout-conseil'])
  }
  goToCorbeilleMaladie(){
    this.route.navigate(['corbeille-maladies'])
  }
}
