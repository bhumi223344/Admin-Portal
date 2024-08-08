import { Component, ChangeDetectionStrategy, Inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';




@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit {
  patientForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _patientService: PatientService, 
    private _dialogRef: MatDialogRef<AddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService


  ) {
    this.patientForm = this._fb.group({
      'fullName': '',
      'age': '',
      'email': '',
      'dob': '',
      'gender': '',
      'allergies': '',
      'contactNumber': '',
      'emergencyContactName': '',
      'emergencyContactNumber': '',
    



    });
  }

  ngOnInit(): void {
      this.patientForm.patchValue(this.data);
  }



  onSubmit() {
    if(this.patientForm.valid) {
      if(this.data) {
        this._patientService.updatePatient(this.data.id, this.patientForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Patient Updated!');
            this._dialogRef.close(true);
  
          },
          error: (err: any) => {
            console.error(err)
          }
        })
      } else{

      

      
      this._patientService.addPatient(this.patientForm.value).subscribe({
        next: (val: any) => {
          
          this._coreService.openSnackBar('Patient Added!', 'Done')
          this._dialogRef.close(true);

        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }
  }
  }
}




  
