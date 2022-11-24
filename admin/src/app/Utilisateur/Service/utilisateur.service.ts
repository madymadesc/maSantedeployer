import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url = environment.URL;

  constructor(private http:HttpClient,) { }

  // ALL Utilisateur
  getAllUtilisateur(){
    return this.http.get(this.url+"/utilisateur");
  }

   // detail Utilisateur
   detailUtilisateur(id:any){
    return this.http.get(this.url + `/compte/${id}`);
  }

  // Desactive compte
  disableCompte(id: any){
    return this.http.put(this.url+'/desactiverCompte/'+id, {responseType:'text'});
  }
  //Active compte
  enableCompte(id: any){
    return this.http.put(this.url+'/activerCompte/'+id, {responseType:'text'});
  }

}
