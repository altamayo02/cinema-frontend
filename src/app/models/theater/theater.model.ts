import { Component, OnInit } from '@angular/core';
import { SeatModel } from '../seat/seat.model';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.model.html',
  styleUrls: ['./theater.model.scss']
})
export class TheaterModel {
  id?: number;
  location: string;
  capacity: number;
  seats?: SeatModel[];
}
