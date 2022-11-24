import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Contact } from 'src/app/model/contact';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-liste-tension',
  templateUrl: './ajout-patient.page.html',
  styleUrls: ['./ajout-patient.page.scss'],
})
export class AjoutPatientPage implements OnInit {

  contact = new Contact();

  mobile: any;
  etat: any;
  medeci: any;
  userMobile: any;
  userId: any;
  medecinId: any;
  utilisateur: any;
  medecin: any;

  oldUser: any;
  oldMedecin: any;
  oldMobile: any;

  id: any;
  InfoUser: any;
  allUser: any;
  newContact: any;

  filterTerm: string;
  userContact: any;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private navCrr: NavController,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.InfoUser = JSON.parse(localStorage.getItem('user'));

    this.service.getAllUtilisateur().subscribe((data: any) => {
      this.allUser = data;
    })

    // list by medecin
    this.service.getContactByMedecin(this.InfoUser.id).subscribe((data: any) => {
      this.userContact = JSON.parse(data);
    })
  }


  async message() {
    await this.toast.create({
      message: "Vous avez déjà cet numero dans votre liste patient",
      duration: 2000,
      icon: 'information-circle',
      position: 'top',
      color: 'primary'
    }).then(res => res.present());
  }

  async messageSuc() {
    await this.toast.create({
      message: "Le numero a été ajouter avec succes dans votre liste patient",
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
    for (let i of this.allUser) {
      i.mobile;
      if (i.mobile === this.mobile) {
        this.userId = {
          Type: i.Type,
          id: i.id
        }
      } else {
        this.errorr();

      }
    }
    // ====================
    this.medecinId = {
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
    this.contact.utilisateur = this.userId;
    this.contact.medecin = this.medecinId;

    if (this.userId.id == this.oldUser.id && this.medecinId.id == this.oldMedecin.id) {
      this.message();
    } else {
      this.service.ajoutContact(this.contact).subscribe((data: any) => {
        this.newContact = data;
        this.navCrr.navigateForward(['docteur']);
        this.messageSuc();
        this.ngOnInit();
      })
    }
  }
}
