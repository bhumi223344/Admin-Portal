import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [ 
    {path: 'login', component: LoginComponent},
    {path: 'patient', component: PatientComponent, canActivate: [authGuard] },
    {path: 'doctor', component: DoctorComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}

];
