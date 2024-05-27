import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projector } from 'src/app/models/projector.model';
import { TheaterModel } from 'src/app/models/theater/theater.model';
import { ProjectorsService } from 'src/app/services/projectors.service';
import { TheatersService } from 'src/app/services/theaters.service';
import Swal from 'sweetalert2';

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
  submitAttempted: boolean
  projectors: Projector[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: TheatersService,
    private projectorsService: ProjectorsService
  ) {
    this.mode = 0
    this.theater = new TheaterModel()
    this.submitAttempted = false
    this.projectors = []
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
    
    this.getProjectors()
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

  getProjectors() {
    this.projectorsService.list().subscribe(data => {
      this.projectors = data
    })
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
        Validators.required,
        Validators.minLength(2),
      ]],
      projectorId: [null, [
        Validators.required
      ]]
    })
  }

  create() {
    if (this.formGroup.invalid) {
      this.submitAttempted = true
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
    }
    this.service.create(this.theater).subscribe(data => {
      Swal.fire("Creación exitosa", "Se ha creado la entrada correctamente")
      this.router.navigate(["theaters/list"])
    })
  }
  
  update() {
    if (this.formGroup.invalid) {
      this.submitAttempted = true
      Swal.fire("Error en el formulario", "Ingrese correctamente los datos solicitados", "error")
    }
    this.service.create(this.theater).subscribe(data => {
      Swal.fire("Creación exitosa", "", "error")
      this.router.navigate(["theaters/list"])
    })
  }

}
