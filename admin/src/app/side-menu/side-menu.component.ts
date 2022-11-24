import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Login/Service/login.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  providers: [ConfirmationService,MessageService]

})
export class SideMenuComponent implements OnInit {

  admin:any;
  adminConnect:any;
  constructor( 
    private service : LoginService,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('userData');
    this.adminConnect=JSON.parse(this.admin)
  }

  confirm2() {
    this.confirmationService.confirm({
        message: 'Confirmez-vous la deconnexion ?',
        header: 'Deconnexion',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Deconnexion'});
            localStorage.removeItem('userData');
            window.location.href="/";
            history.forward();
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
    
}




logOut(){
  localStorage.removeItem('userData');
  window.location.href="/";


}
  home(){
    this.service.goToAccueil();
  }
  medecin(){
    this.service.goToMedecin();
  }
  profil(){
    this.service.goToProfil();
  }
  utilisateur(){
    this.service.goToUtlisateur();
  }

  maladie(){
    this.service.goToMaladie();
  }
  specialite(){
    this.service.goToSpecialite();
  }

}
