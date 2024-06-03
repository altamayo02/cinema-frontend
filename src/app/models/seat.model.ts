import { Theater } from "./theater.model";

export class Seat {
	id?: number;
	location: string;
	reclinable: boolean;
	theater_id?: number;
	theater?: Theater
}
