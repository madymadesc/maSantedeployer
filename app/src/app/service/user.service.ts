import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  url = 'https://odkmasante.herokuapp.com/masante/api/test';
  URLPhotoConsiel = 'https://odkmasante.herokuapp.com/masante/api/test/getImage/';

  //--------------connexion au  compte mobile motDePasse-------------

  public loginUserFromRemote(mobile: any, motDePasse): Observable<any> {
    return this._http.get("https://odkmasante.herokuapp.com/masante/api/test/connexion/" + mobile + "&" + motDePasse)

  }

  //--------------connexion au  compte Email motDePasse-------------

  public loginByEmailAndPassword(email: any, motDePasse): Observable<any> {
    return this._http.get(this.url + "/connexionEmail/" + email + "&" + motDePasse)

  }


  public registerUserFromRemote(compte: any) {
    return this._http.post("https://odkmasante.herokuapp.com/masante/api/test/creer", compte, { responseType: "text" })
  }


  //--------------creation de compte-------------

  creerCompte(data: any): Observable<any> {
    return this._http.post(this.url + "/creer", data, { responseType: "text" });
  }

  //------------------Algo--------------------------

  calculDonnee(data: any): Observable<any> {
    return this._http.post(this.url + "/calculDonnee", data);
  }

  //-------------Calcul Tension-----------------------

  calculTension(data: any): Observable<any> {
    return this._http.post(this.url + "/calculTension", data, { responseType: "text" });
  }

  //-------------Calcul Diabete-----------------------

  calculDiabete(data: any): Observable<any> {
    return this._http.post(this.url + "/calculDiabete", data, { responseType: "text" });
  }

  //-------------ALgo Resultat-----------------------
  resultat(): Observable<any> {
    return this._http.get(this.url + "/dernierDonnee/")
  }
  //-------------User Data -----------------------
  dataDetail(id: any) {
    return this._http.get(this.url + "/DonneeById/" + id, { responseType: "text" })
  }

  //-------------User Data -----------------------

  userData(id: any): Observable<any> {
    return this._http.get(this.url + "/donneeByUser/" + id, { responseType: "text" })
  }
  //-------------Compte detail-----------------------
  compteDetail(id: any) {
    return this._http.get(this.url + "/compte/" + id, { responseType: "text" })
  }
  //-------------User Donnee-----------------------
  userDonnee(id: any): Observable<any> {
    return this._http.get(this.url + "/userDonnee/" + id, { responseType: "text" })
  }

  //-----------------detail Conseil------------------
  detailConseil(id: any) {
    return this._http.get(this.url + `/ConseilById/${id}`);
  }

  //-----------------Liste Active-------------
  listeConseilActive() {
    return this._http.get(this.url + '/conseilActive');
  }

  //-----------------Choix du suivie DIABETE-------------
  suivieChoixDiabete(id: any) {
    return this._http.put(this.url + '/suivieDIABETE/' + id, { responseType: 'text' });
  }

  //-----------------Choix du suivie DIABETE-------------
  suivieChoixTension(id: any) {
    return this._http.put(this.url + '/suivieTENSION/' + id, { responseType: 'text' });
  }

  //-----------------Choix du suivie DIABETE-------------
  modifierProfil(id: any, data: any) {
    return this._http.put(this.url + '/modifier/' + id, data);
  }

  //--------------ajout de contact-------------

  ajoutContact(data: any): Observable<any> {
    return this._http.post(this.url + "/ajouterContact", data, { responseType: "text" });
  }

  // ALL Utilisateur
  getAllUtilisateur() {
    return this._http.get(this.url + "/utilisateur");
  }

  //Liste medecin
  getAllMedecin() {
    return this._http.get(this.url + "/medecin");
  }

  //List contact by User
  getContactByUser(id: any) {
    return this._http.get(this.url + "/userContact/" + id, { responseType: "text" });
  }

  //List contact by medecin
  getContactByMedecin(id: any) {
    return this._http.get(this.url + "/medecinContact/" + id, { responseType: "text" });
  }

  // suprimer
  deleteContact(id: any) {
    return this._http.delete(this.url + '/suprimerContact/' + id, { responseType: 'text' });
  }

  //Liste Contact
  getAllContact() {
    return this._http.get(this.url + "/allContact");
  }

  //======================= END ==================


}
