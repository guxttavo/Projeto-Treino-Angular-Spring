import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  login(loginDetails: login) {
    return this.http.post(`${this.apiUrl}`, loginDetails);
  }
}
