import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../interfaces/login';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class loginService {

    private apiUrl = 'http://localhost:8080/auth';
    usuarioLogado: boolean = false;

    constructor(private http: HttpClient) { }

    login(email: string, senha: string): Observable<login> {
        return this.http.post<login>(this.apiUrl + "/login", { email, senha }).pipe(
            tap((value) => {
                sessionStorage.setItem("username", value.nome)
                sessionStorage.setItem("auth-token", value.token)
                this.usuarioLogado = true;
            }
            )
        );
    }

    verificaLogin(): boolean {
        const token = sessionStorage.getItem("auth-token");

        if (token) {
            return true;
        } else {
            return false;
        }
    }
}
