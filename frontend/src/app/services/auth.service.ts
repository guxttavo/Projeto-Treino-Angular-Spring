import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { user } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: user) {
    return this.http.post(`${this.apiUrl}`, userDetails);
  }
}
