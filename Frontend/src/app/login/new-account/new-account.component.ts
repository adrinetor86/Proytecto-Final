import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import { ValidService } from "../../servicios/validate.service";
import {Router} from "@angular/router";
import {catchError, of} from "rxjs";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent {
  @ViewChild('formNewAccount', { static: false }) formNewAccount: NgForm;
  constructor(private validService: ValidService, private router: Router){
  }
  errorMessage = false;

  registerNewUser(){
    const email = this.formNewAccount.value.emailNew;
    const username = this.formNewAccount.value.usernameNew;
    const password = this.formNewAccount.value.passwordNew;
    // En tu archivo component.ts
    this.validService.registerNewUser(email, username, password).pipe(
      catchError(() => {
        this.errorMessage = true;
        setTimeout(() => {
          this.errorMessage = false;
        }, 5000);
        return of(null);
      })
    ).subscribe(response => {
      if (response!==null)
        this.router.navigate(['/login']);
    });
    this.formNewAccount.reset();
  }
  cancelRegister(){
    this.router.navigate(['/login']);
  }

}
