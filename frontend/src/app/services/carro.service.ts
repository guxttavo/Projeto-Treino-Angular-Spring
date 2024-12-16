import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoria } from '../interfaces/categoria';
import { cor } from '../interfaces/cor';
import { marca } from '../interfaces/marca';
import { tipoDeCombustivel } from '../interfaces/tipoDeCombustivel';
import { carro } from '../interfaces/carro';

@Injectable({
    providedIn: 'root'
})

export class carroService {

    private apiUrl = 'http://localhost:8080/carro';

    constructor(private http: HttpClient) { }

    cadastrarCarro(carro: carro) {
        return this.http.post(`${this.apiUrl + "/cadastrarCarro"}`, carro);
    }

    buscarCategorias(): Observable<categoria[]> {
        return this.http.get<categoria[]>(`${this.apiUrl}/categoria`);
    }

    buscarCores(): Observable<cor[]> {
        return this.http.get<cor[]>(`${this.apiUrl}/cor`);
    }

    buscarMarcas(): Observable<marca[]> {
        return this.http.get<marca[]>(`${this.apiUrl}/marca`);
    }

    buscarTiposDeCombustiveis(): Observable<tipoDeCombustivel[]> {
        return this.http.get<tipoDeCombustivel[]>(`${this.apiUrl}/tipoDeCombustivel`);
    }

  
}
