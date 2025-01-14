import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from './calendar/calendar.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calendar],
  templateUrl: './app.component.html',
})
export class AppComponent {}
