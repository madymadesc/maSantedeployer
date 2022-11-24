import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Login/Service/login.service';
import { MaladieService } from '../Service/maladie.service';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';

@Component({
  selector: 'app-liste-maladie',
  templateUrl: './liste-maladie.component.html',
  styleUrls: ['./liste-maladie.component.scss'],
  providers: [ConfirmationService,MessageService]

})
export class ListeMaladieComponent implements OnInit {
  list:any;
  list1:any;
  search = '';
  constructor(
    private service : LoginService,
    private serviceM :MaladieService,
    private router: Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
    ) { }



  ngOnInit(): void {
    this.serviceM.listeMaladieActive().subscribe((data:any)=>{
      this.list = data;
      this.list1 = this.list.length;
    })
  }
  
     
  confirm2(id :any) {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir supprimer?',
        header: 'Confirmation de la suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Suprimer'});
            this.serviceM.disableMaladie(id).subscribe(data=>{
              this.router.navigate(['liste-maladie']);
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
  this.service.goToAjoutMala();
}

// suprime(id:any){
//   this.serviceM.deleteMaladie(id).subscribe(data=>{
//     this.router.navigate(['liste-maladie']);
//   })
//   window.location.reload();
// }

}
