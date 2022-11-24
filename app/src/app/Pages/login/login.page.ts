//  =============================
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  user = new User();

  exist: any;
  type: any;
  constructor(private _service: UserService,
    private _router: Router,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.validations_form = this.formBuilder.group({
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{8}$')
      ])),
      motDePasse: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'mobile': [
      { type: 'required', message: 'le numéro est obligatoire.' },
      { type: 'pattern', message: 'Veuillez entrer un numéro valide.' }
    ],
    'motDePasse': [
      { type: 'required', message: 'le mot de passe est obligatoire.' },
      { type: 'minlength', message: 'le mot de passe doit contenir au moins 5 caractères.' }
    ]
  };

  loginUser(data: any) {
    this._service.loginUserFromRemote(data.value.mobile, data.value.motDePasse).subscribe(
      data => {
        this.type = data;
        this.exist = data;
        if (!data) {
          return "n'exixte pas dans la base"
        } else if (data.Type == "MEDECIN") {
          localStorage.setItem('user', JSON.stringify(data));
          this._router.navigate(['/dashboard']);
          window.location.reload();
        }
        else if (data.Type == "UTILISATEUR") {
          localStorage.setItem('user', JSON.stringify(data));
          this._router.navigate(['/tabs'])
          window.location.reload();

        }

        this._service.loginByEmailAndPassword(data.value.mobile, data.value.motDePasse).subscribe(
          data => {
            this.type = data;
            this.exist = data;
            if (!data) {
              return "n'exixte pas dans la base"
            } else if (data.Type == "MEDECIN") {
              localStorage.setItem('user', JSON.stringify(data));
              this._router.navigate(['/dashboard']);
              window.location.reload();
            }
            else if (data.Type == "UTILISATEUR") {
              localStorage.setItem('user', JSON.stringify(data));
              this._router.navigate(['/tabs'])
              window.location.reload();

            }
          }
        )

      }
    )
  }
  initializeApp(): null {
    throw new Error('Method not implemented.');
  }

}
