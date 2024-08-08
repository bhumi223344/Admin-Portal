import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [MatProgressBarModule, MatCardModule, MatChipsModule, MatToolbarModule, RouterLink, RouterModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorComponent {
  

}
