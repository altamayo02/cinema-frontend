import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheaterModel } from '../models/theater/theater.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<TheaterModel[]> {
    return this.http.get<TheaterModel[]>(`${environment.url_ms_cinema}/theaters/`)
  }

  view(id: number): Observable<TheaterModel> {
    return this.http.get<TheaterModel>(`${environment.url_ms_cinema}/theaters/${id}`)
  }

  create(theater: TheaterModel): Observable<TheaterModel> {
    return this.http.post<TheaterModel>(`${environment.url_ms_cinema}/theaters/`, theater)
  }

  update(theater: TheaterModel): Observable<TheaterModel> {
    return this.http.put<TheaterModel>(`${environment.url_ms_cinema}/theaters/${theater.id}`, theater)
  }
  
  delete(id: number) {
    return this.http.delete<TheaterModel>(`${environment.url_ms_cinema}/theaters/${id}`)
  }
}
