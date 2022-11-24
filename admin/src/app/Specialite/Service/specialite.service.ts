import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
url = environment.URL;
  constructor(
    private http: HttpClient
  ) { }

   // Liste
  listeSpecialite(){
    return this.http.get(this.url+'/allSpecialite');
  }
   // Liste Active
   listeSpecialiteActive(){
    return this.http.get(this.url+'/specialiteActive');
  }
   // Liste Inactive
   listeSpecialiteInactive(){
    return this.http.get(this.url+'/specialiteInactive');
  }
  
   // ajouter
  ajoutSpecialite(data: any){
    return this.http.post(this.url+'/ajouterSpecialite', data, {responseType:'text'});
  }

   // Modifier
  modifierSpecialite(id: any, data: any){
    return this.http.put(this.url + '/modifierSpecialite/'+id, data);
  }

   // details
  detailSpecialite(id: any){
    return this.http.get(this.url + '/specialiteById/'+id);
  }

   // suprimer
  deleteSpecialite(id: any){
    return this.http.delete(this.url + '/suprimerSpecialite/'+id, {responseType:'text'});
  }

   // Desactive Specialite
   disableSpecialite(id: any){
    return this.http.put(this.url+'/desactiverSpecialite/'+id, {responseType:'text'});
  }
  //Active Specialite
  enableSpecialite(id: any){
    return this.http.put(this.url+'/activerSpecialite/'+id, {responseType:'text'});
  }

}
