import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TheaterModel } from 'src/app/models/theater/theater.model';
import { TheatersService } from 'src/app/services/theaters.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  /*
    0: View
    1: Create
    2: Update
  */
  mode: number
  theater: TheaterModel
  formGroup: FormGroup

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: TheatersService,
  ) {
    this.mode = 0
    this.theater = {
      id: 0,
      location: "",
      capacity: 0
    }
    this.buildFormGroup()
  }

  ngOnInit(): void {
    const currentUrl = this.activatedRoute.snapshot.url.join("/")
    
    const modes = ['create', 'view', 'update']
    while (true) {
      if (currentUrl.includes(modes[this.mode])) break
      else this.mode++
    }
    console.log(`The mode is ${this.mode}`)

    if (this.activatedRoute.snapshot.params.id) {
      this.theater.id = this.activatedRoute.snapshot.params.id
      this.getTheater(this.theater.id)
    }
  }

  getTheater(id: number) {
    this.service.view(id).subscribe(data => {
      this.theater = data
      console.log(`Theater: ${JSON.stringify(this.theater)}`)
    })
  }

  getTheaterData() {
    this.theater.capacity = this.getFormGroup.capacity.value
    this.theater.location = this.getFormGroup.location.value
  }
  
  get getFormGroup() {
    return this.formGroup.controls
  }

  buildFormGroup() {
    this.formGroup = this.formBuilder.group({
      capacity: [0, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
      ]],
      location: ['', [
        Validators.minLength(2),
      ]]
    })
  }
}
