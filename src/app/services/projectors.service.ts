import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projector } from '../models/projector.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectorsService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Projector[]> {
    return this.http.get<Projector[]>(`${environment.url_ms_cinema}/projectors`)
  }

  view(id: number): Observable<Projector> {
    return this.http.get<Projector>(`${environment.url_ms_cinema}/projectors/${id}`)
  }

  create(theater: Projector): Observable<Projector> {
    return this.http.post<Projector>(`${environment.url_ms_cinema}/projectors/`, theater)
  }

  update(theater: Projector): Observable<Projector> {
    return this.http.put<Projector>(`${environment.url_ms_cinema}/projectors/${theater.id}`, theater)
  }
  
  delete(id: number) {
    return this.http.delete<Projector>(`${environment.url_ms_cinema}/projectors/${id}`)
  }
}
