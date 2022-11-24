import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonneeService {
  url = environment.URL;

  constructor(private http:HttpClient,) { }
// ALL donnee
getAllDonnee(){
  return this.http.get(this.url+"/allDonnee");
}

 // detail donnee
 detailDonnee(id:any){
  return this.http.get(this.url + `/DonneeById/${id}`);
}
 // detail donnee par Utilisateur
 detailDonneeByUser(id:any){
  return this.http.get(this.url + `/donneeByUser/${id}`);
}
// All donnee par Utilisateur
userDonnee(id:any){
  return this.http.get(this.url + `/userDonnee/${id}`);
}
}
