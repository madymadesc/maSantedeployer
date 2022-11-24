import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Contact } from 'src/app/model/contact';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ajout-docteur',
  templateUrl: './ajout-docteur.page.html',
  styleUrls: ['./ajout-docteur.page.scss'],
})
export class AjoutDocteurPage implements OnInit {

  contact = new Contact();

  medecin: any;
  id: any;
  medeciMobile: any;
  utilisateur: any;
  InfoUser: any;
  mobile: any;
  newContact: any;

  oldUser: any;
  oldMedecin: any;
  oldMobile: any;

  filterTerm: string;
  userContact: any;
  constructor(
    private service: UserService,
    private navCrr: NavController,
    private route: ActivatedRoute,
    private toast : ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.InfoUser = JSON.parse(localStorage.getItem('user'));

    this.service.getAllMedecin().subscribe((data: any) => {
      this.medecin = data;
    })

    // list by user
    this.service.getContactByUser(this.InfoUser.id).subscribe((data:any)=>{
      this.userContact = JSON.parse(data);
    })
  }

  async message(){
    await this.toast.create({
      message:"Vous avez déjà cet numero dans votre liste de medecin",
      duration:2000,
      icon: 'information-circle',
      position: 'top',
      color:'primary'
    }).then( res=> res.present());
  }

  async messageSuc() {
    await this.toast.create({
      message: "Le numero a été ajouter avec succes dans votre liste medecin",
      duration: 2050,
      icon: 'information-circle',
      position: 'top',
      color: 'primary'
    }).then(res => res.present());
  }
  async errorr() {
    await this.toast.create({
      message: "Cette numero n'a pas de compte, invite le à s'inscrire sur MaSante!!!",
      duration: 2000,
      icon: 'information-circle',
      position: 'top',
      color: 'danger'
    }).then(res => res.present());
  }

  async ajoutContact(forms: NgForm) {
    this.mobile = forms.value['mobile'];
    // ====================
    for (let i of this.medecin) {
      i.mobile;
      if (i.mobile == this.mobile) {
        this.medeciMobile = {
          Type: i.Type,
          id: i.id
        }
      } else {
        this.errorr();

      }
    }
    // ====================
    this.utilisateur = {
      Type: this.InfoUser.Type,
      id: this.InfoUser.id
    }

    //====================== contrainte =============
    for (let i of this.userContact) {
      this.oldUser = {
        Type: i.utilisateur.Type,
        id: i.utilisateur.id
      };
      this.oldMedecin = {
        Type: i.medecin.Type,
        id: i.medecin.id
      };
      this.oldMobile = i.mobile;
    }

    // ====================
    this.contact.mobile = this.mobile;
    this.contact.utilisateur = this.utilisateur;
    this.contact.medecin = this.medeciMobile;

    //============== suite contrainte=============
    if (this.utilisateur.id == this.oldUser.id && this.medeciMobile.id == this.oldMedecin.id) {
      this.message();
    } else {
      this.service.ajoutContact(this.contact).subscribe((data: any) => {
        this.newContact = data;
        this.ngOnInit();
        this.navCrr.navigateForward(['docteur']);
        this.messageSuc();
        
      })
    }


  }
}
