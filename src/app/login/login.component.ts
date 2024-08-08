import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PatientComponent } from '../patient/patient.component';
import { PatientService } from '../services/patient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { RouterLink, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';

import {MatTableModule} from '@angular/material/table';
import { authGuard } from '../auth.guard';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, PatientComponent, FormsModule, CommonModule, RouterModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatDividerModule, MatTableModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [PatientService, AuthService]
})
export class LoginComponent {


//   usernameFormControl = new FormControl('', [Validators.required])
//   passwordFormControl = new FormControl('', [Validators.required])


//   username: string = '';
//   password: string = '';
//   loginFailed: boolean = false ;
 
  
//   constructor(private _patientervice: PatientService) {}
//   onSubmit() {
//     this._patientervice.login(this.username, this.password).subscribe(isLoggedIn => {
//       if (isLoggedIn) {
//         console.log('login Successfull')
        
//       } else {
//         console.log('Login Failed!!');
//         this.loginFailed = true;
        
//       }
//     });
//   }

  login(username:any, password: any) {
    if(username == 'Admin' && password == 'admin123') {
      sessionStorage.setItem("isloggedIn", "true");
    } else {
      sessionStorage.setItem("isloggedIn", "false");
    }
  }
}
