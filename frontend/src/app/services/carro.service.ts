import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { categoria } from '../interfaces/categoria';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class carroService {

    private apiUrl = 'http://localhost:8080/carro';

    constructor(private http: HttpClient) { }

    buscarCategorias(): Observable<categoria[]> {
        return this.http.get<categoria[]>(`${this.apiUrl}/categoria`);
    }
}
