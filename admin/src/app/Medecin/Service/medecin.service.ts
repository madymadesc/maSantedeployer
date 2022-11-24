import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  url = environment.URL;
  constructor(private http:HttpClient,) { }

  //Liste des tous les compte
  listUtilisateur(){
    return this.http.get(this.url+"/tout");
  }
  //Liste medecin
  getAllMedecin(){
    return this.http.get(this.url+"/medecin");
  }
  // detail medecin
  detailMedecin(id:any){
    return this.http.get(this.url + `/compte/${id}`);
  }
}
