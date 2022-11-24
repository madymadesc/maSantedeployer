import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConseilService } from '../Service/conseil.service';

@Component({
  selector: 'app-ajout-conseil',
  templateUrl: './ajout-conseil.component.html',
  styleUrls: ['./ajout-conseil.component.scss']
})
export class AjoutConseilComponent implements OnInit {

  admin : any;
  formGroup : any;
  public imgFile : any = File;
  submitted = false;
  constructor(
    private serviceC :ConseilService,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.admin = localStorage.getItem('userData'); 
   }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle:['', Validators.required],
      description:['',Validators.required],
      admin:['',Validators.required],
    })
  }
  get f() { return this.formGroup.controls; }

  chargephoto(files: any){
    this.imgFile = files
    console.log(this.imgFile)
  }

  ajoutConseil(fg : FormGroup){
    this.submitted = true;
    // Arrette si le forms est invalid
    if(fg.value){

     fg.value.admin = JSON.parse(this.admin);
    console.log(fg.value.admin)

    this.serviceC.ajoutConseil(fg.value,this.imgFile[0]).subscribe((data:any)=>{

      data.libelle=fg.value['libelle']
      data.description=fg.value['description']
      data.admin=fg.value['admin']

    this.serviceC.modifierConseil(data.id, data).subscribe((dat:any)=>{

      this.router.navigate(['liste-conseil'])
    })
    })
    }
  }




  

}
