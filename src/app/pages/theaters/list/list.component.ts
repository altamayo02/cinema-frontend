import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theater } from 'src/app/models/theater.model';
import { TheatersService } from 'src/app/services/theaters.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	theaters: Theater[]

	constructor(
		private service: TheatersService,
		private router: Router,
	) {
		this.theaters = []
	}

	ngOnInit(): void {
		this.list()
	}

	
	create() {

	}

	list() {
		this.service.list().subscribe(theaters => {
			this.theaters = theaters
			console.log(JSON.stringify(theaters))
		})
	}

	view(id: number) {
		this.router.navigate(['theaters/view/', id])
	}

	update(id: number) {

	}

	delete(id: number) {

	}
}
