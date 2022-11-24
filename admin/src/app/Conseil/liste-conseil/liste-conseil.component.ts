import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { LoginService } from 'src/app/Login/Service/login.service';
import { ConseilService } from '../Service/conseil.service';

@Component({
  selector: 'app-liste-conseil',
  templateUrl: './liste-conseil.component.html',
  styleUrls: ['./liste-conseil.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ListeConseilComponent implements OnInit {
  list: any;
  search = '';
  img : any;

  constructor(
    private serviceC : ConseilService,
    private service : LoginService,
    private router: Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.img = this.serviceC.URLPhotoConsiel
    this.serviceC.listeConseilActive().subscribe((data:any)=>{
      this.list = data;
    })
  }

  confirm2(id :any) {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer?',
        header: 'Confirmation de la suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Suprimer'});
            this.serviceC.disableConseil(id).subscribe(data=>{
              this.router.navigate(['liste-conseil'])
            })
            window.location.reload();
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

  ajout(){
    this.service.goToAjoutConseil();
  }

}
