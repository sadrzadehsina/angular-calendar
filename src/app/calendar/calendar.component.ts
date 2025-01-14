import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CalendarDay } from './calendar-day.class';
import { ChunkPipe } from '../pipes/chunk-pipe';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  imports: [ChunkPipe, MatButtonModule],
})
export class Calendar implements OnInit {
  public calendarDays: CalendarDay[] = [];

  ngOnInit(): void {
    this.generateCalendarDays();
  }

  private generateCalendarDays(): void {
    const numberOfDaysToShow = 35;

    this.calendarDays = [];

    const today: Date = new Date();

    const startDateOfCalendar = this.getStartDateOfCalendar(today);

    let dateToAdd = startDateOfCalendar;

    this.calendarDays.push(new CalendarDay(new Date(dateToAdd)));

    for (let i = 0; i < numberOfDaysToShow; i++) {
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
      this.calendarDays.push(new CalendarDay(new Date(dateToAdd)));
    }
  }

  private getStartDateOfCalendar(date: Date) {
    let lastDayOfPreviousMonth = new Date(date.setDate(0));

    let startDateOfCalendar: Date = lastDayOfPreviousMonth;

    if (startDateOfCalendar.getDay() != 1) {
      do {
        startDateOfCalendar = new Date(
          startDateOfCalendar.setDate(startDateOfCalendar.getDate() - 1)
        );
      } while (startDateOfCalendar.getDay() != 1);
    }

    return startDateOfCalendar;
  }
}
