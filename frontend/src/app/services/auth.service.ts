import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuarioDetails: usuario) {
    return this.http.post(`${this.apiUrl}`, usuarioDetails);
  }
}
