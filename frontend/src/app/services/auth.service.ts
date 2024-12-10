import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  usuarioLogado(): boolean {
    const token = sessionStorage.getItem("auth-token");

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  
}
