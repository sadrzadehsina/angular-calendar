import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AppHeader } from '../components/app-header/app-header.component';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatTimepickerModule,
    AppHeader,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Appointment {
  appointmentForm = new FormGroup({
    title: new FormControl(''),
    invitees: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
  });
}
