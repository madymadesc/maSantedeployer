import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConseilService } from '../Conseil/Service/conseil.service';
import { MaladieService } from '../Maladie/Service/maladie.service';
import { SpecialiteService } from '../Specialite/Service/specialite.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';



@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss'],
  providers: [ConfirmationService,MessageService]

})
export class CorbeilleComponent implements OnInit {

  search='';
 conseils :any;
 specialite :any;
 maladie :any;
 id :any;
  constructor(
    private serviceC : ConseilService,
    private serviceM : MaladieService,
    private serviceS : SpecialiteService,
    private route : ActivatedRoute,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    //Conseils inactive
    this.serviceC.listeConseilInactive().subscribe((data:any)=>{
      this.conseils = data;
    })
    //Maladies inactive
    this.serviceM.listeMaladieInactive().subscribe((data:any)=>{
      this.maladie = data;
    })
    //Specialite inactive
    this.serviceS.listeSpecialiteInactive().subscribe((data:any)=>{
      this.specialite = data;
    })

  }

  changeEta(id :any){
    //enable conseil
    this.serviceC.enableConseil(id).subscribe((data:any)=>{
    })
    // enable Maladies
    this.serviceM.enableMaladie(id).subscribe((data:any)=>{
    })
    // enable Specialite
    this.serviceS.enableSpecialite(id).subscribe((data:any)=>{
    })


    // window.location.reload();
    this.ngOnInit();

  }

  changeEtat(id :any) {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir restorer ?',
        header: 'Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Suprimer'});
            this.changeEta(id);
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

}
