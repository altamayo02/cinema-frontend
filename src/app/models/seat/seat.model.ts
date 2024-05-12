import { Component, OnInit } from '@angular/core';
import { TheaterModel } from '../theater/theater.model';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.model.html',
  styleUrls: ['./seat.model.scss']
})
export class SeatModel {
	id?: number;
	location: string;
	reclinable: boolean;
	theater_id?: number;
	theater?: TheaterModel;
}
