import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsuario(): Observable<any> {
    return this.http.get(`${this.baseUrl}/usuarios`);

  }

}
