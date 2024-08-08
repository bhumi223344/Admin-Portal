import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, viewChild, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';
import { routes } from '../app.routes';
import { RouterLink, RouterModule } from '@angular/router';



@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, AddPatientComponent, MatDialogModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, ReactiveFormsModule, MatPaginatorModule, MatTableModule, MatSortModule, CommonModule, MatNativeDateModule, MatSnackBarModule, RouterModule, RouterLink],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{

  displayedColumns: string[] = ['id', 'fullName', 'age', 'email', 'dob', 'gender', 'allergies', 'contactNumber', 'emergencyContactName', 'emergencyContactNumber', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _patientService: PatientService,
    private _coreService: CoreService 
  
  ) {}

  ngOnInit(): void {
    this.getPatientList();
      
  }

  openAddPatientForm() {
    const dialogRef = this._dialog.open(AddPatientComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getPatientList();
        }
      }
    })
  }

  getPatientList() {
    this._patientService.getPatientList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePatient(id: number) {
    this._patientService.deletePatient(id).subscribe({
      next: (res) => {
        
        this._coreService.openSnackBar('Patient Deleted!', 'Done')
        this.getPatientList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddPatientComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getPatientList();
        }
      }
    })
    
  }

}
