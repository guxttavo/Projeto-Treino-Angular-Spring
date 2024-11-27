import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../interfaces/login';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class loginService {

    private apiUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) { }

    login(email: string, senha: string) {
        return this.http.post<login>(this.apiUrl + "/login", { email, senha }).pipe(
            tap((value) => {
                sessionStorage.setItem("username", value.nome)
                sessionStorage.setItem("auth-token", value.token)
            }
            )
        );
    }
}
