import { Routes } from '@angular/router';

import { Calendar } from './calendar/calendar.component';
import { Appointment } from './appointment/appointment.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: Calendar,
      },
      {
        path: 'create-appointment',
        component: Appointment,
      },
    ],
  },
];
