import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = environment.URL;

  constructor
  (
    private http: HttpClient
  ) { }

  modifierProfil(id: any, data: any){
    return this.http.put(this.url + '/modifier/'+ id, data);
  }
}
