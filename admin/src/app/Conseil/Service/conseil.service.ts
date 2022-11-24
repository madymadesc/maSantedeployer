import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConseilService {
  url = environment.URL;
  URLPhotoConsiel = environment.URLPhotoConsiel;

  constructor(private http:HttpClient,) { }
// ALL Conseil
getAllConseil(){
  return this.http.get(this.url+"/allConseil");
}

 // Liste Active
 listeConseilActive(){
  return this.http.get(this.url+'/conseilActive');
}
 // Liste Inactive
 listeConseilInactive(){
  return this.http.get(this.url+'/conseilInactive');
}

 // detail Conseil
 detailConseil(id:any){
  return this.http.get(this.url + `/ConseilById/${id}`);
}

 // Ajouter Conseil
ajoutConseil(data: any, photo: File): Observable<any>{
  const formData: FormData = new FormData();
      formData.append("file", photo);
  return this.http.post(this.url+'/ajouterConseil', formData);
}

 // Modifier Conseil
modifierConseil(id: any, data: any){
  return this.http.put(this.url + '/modifierConseil/'+id, data);
}

 // Suprimer Conseil
deleteConseil(id: any){
  return this.http.delete(this.url + '/suprimerConseil/'+id, {responseType:'text'});
}
// Desactive Conseil
disableConseil(id: any){
  return this.http.put(this.url+'/desactiverConseil/'+id, {responseType:'text'});
}
//Active Conseil
enableConseil(id: any){
  return this.http.put(this.url+'/activerConseil/'+id, {responseType:'text'});
}
}
