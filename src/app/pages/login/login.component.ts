import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SecurityService } from 'src/app/services/security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  theUser: User
  constructor(
    private theSecurityService: SecurityService
  ) {
    this.theUser = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  
  login() {
    this.theSecurityService.login(this.theUser).subscribe({
      next: data => {
        console.log('MS-Security response');
        this.theSecurityService.saveSession(data)
      },
      error: error => {
        if (error.status === HttpStatusCode.Unauthorized) {
          Swal.fire('Usuario o contraseña inválidos', 'error')
        }
      }
    })
  }
}
