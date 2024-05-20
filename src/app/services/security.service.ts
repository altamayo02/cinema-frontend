import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  theUser = new BehaviorSubject<User>(new User)

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public get activeUserSession(): User {
    return this.theUser.value
  }

  getUser(): Observable<User> {
    return this.theUser.asObservable()
  }

  setUser(user: User): void {
    this.theUser.next(user)
  }

  getSessionData(): string {
    let currentSession = localStorage.getItem('session');
    return currentSession
  }


  login(user: User): Observable<any> {
    return this.http.post<User>(`${environment.url_ms_security}/api/public/security/login`, user)
  }

  logout(): void {
    localStorage.removeItem('session');
    this.setUser(new User());
  }

  sessionExists(): boolean {
    let currentSession = this.getSessionData()
    return currentSession ? true : false
  }

  loadSession(): void {
    let currentSession = this.getSessionData()
    if (currentSession) {
      this.setUser(JSON.parse(currentSession));
    }
  }

  saveSession(sessionData: any): void {
    let data: User = {
      _id: sessionData['user']['_id'],
      name: sessionData['user']['name'],
      email: sessionData['user']['email'],
      password: '',
      token: sessionData['token']
    }
    localStorage.setItem('session', JSON.stringify(data))
    this.setUser(data)
  }
}
