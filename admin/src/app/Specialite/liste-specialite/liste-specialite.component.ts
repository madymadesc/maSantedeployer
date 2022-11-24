import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Login/Service/login.service';
import { SpecialiteService } from '../Service/specialite.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-liste-specialite',
  templateUrl: './liste-specialite.component.html',
  styleUrls: ['./liste-specialite.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class ListeSpecialiteComponent implements OnInit {

  
    
  list:any;
  search = '';
  constructor(
    private service : LoginService,
    private serviceS : SpecialiteService,
    private router: Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
    ) { }



  ngOnInit(): void {
    this.serviceS.listeSpecialiteActive().subscribe((data:any)=>{
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
            this.serviceS.disableSpecialite(id).subscribe(data=>{
              // this.router.navigate(['liste-specialite'])
            })
            this.ngOnInit();
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
  this.service.goToAjoutSp();
}
// suprime(id:any){
//   this.serviceS.deleteSpecialite(id).subscribe(data=>{
//     this.router.navigate(['liste-specialite'])
//   })
//   window.location.reload();
// }
}
