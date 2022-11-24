import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {
  url = environment.URL;
  constructor(
    private http: HttpClient
  ) { }

  // liste
  listeMaladie(){
    return this.http.get(this.url+'/allMaladies');
  }
  // Liste Active
  listeMaladieActive(){
    return this.http.get(this.url+'/maladieActive');
  }
   // Liste Inactive
   listeMaladieInactive(){
    return this.http.get(this.url+'/maladieInactive');
  }

  //Ajouter
  ajoutMaladie(data: any){
    return this.http.post(this.url+'/ajouterMaladie', data,{responseType:'text'});
  }

  // Modifier
  modifierMaladie(id: any, data: any){
    return this.http.put(this.url + '/modifierMaladie/'+ id, data);
  }

  // Details
  detailMaladie(id: any){
    return this.http.get(this.url + '/maladieById/'+ id);
  }

  // Suprimer
  deleteMaladie(id: any){
    return this.http.delete(this.url + '/suprimerMaladie/'+id, {responseType:'text'});
  }
  // Desactive Maladie
  disableMaladie(id: any){
    return this.http.put(this.url+'/desactiverMaladie/'+id, {responseType:'text'});
  }
  //Active Maladie
  enableMaladie(id: any){
    return this.http.put(this.url+'/activerMaladie/'+id, {responseType:'text'});
  }
}
