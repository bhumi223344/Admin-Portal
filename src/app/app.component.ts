import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy,Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, MatIconModule, MatButtonModule, MatToolbarModule, LoginComponent, PatientComponent, AddPatientComponent, MatDialogModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, ReactiveFormsModule, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portal';
}
