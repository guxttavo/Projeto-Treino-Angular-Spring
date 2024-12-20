import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
