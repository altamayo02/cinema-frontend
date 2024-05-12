import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheaterModel } from 'src/app/models/theater/theater.model';
import { TheatersService } from 'src/app/services/theaters.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  theaters: TheaterModel[]
  constructor(
    private service: TheatersService,
    private router: Router,
    theaters: Array<TheaterModel>
  ) {
    this.theaters = theaters
  }

  ngOnInit(): void {
  }

  
  create() {

  }

  list() {
    this.service.list().subscribe()
  }

  view(id: number) {
    this.router.navigate(['theaters/view/', id])
  }

  update(id: number) {

  }

  delete(id: number) {

  }
}
