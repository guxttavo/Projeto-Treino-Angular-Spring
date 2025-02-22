import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { categoria } from '../interfaces/categoria';
import { cor } from '../interfaces/cor';
import { fabricante } from '../interfaces/fabricante';
import { combustivel } from '../interfaces/combustivel';
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

    editarCarro(id: number, carro: carro) {
        return this.http.put(`${this.apiUrl}/editarCarro/${id}`, carro);
    }

    deletarCarro(id: number): Observable<carro> {
        return this.http.delete<carro>(`${this.apiUrl}/deletarCarro/${id}`);
    }

    buscarCarroPorId(id: number) {
        return this.http.get<carro>(`${this.apiUrl}/public/buscarCarroPorId/${id}`);
    }

    listarCarro(): Observable<carro[]> {
        return this.http.get<carro[]>(`${this.apiUrl}/listarCarro`)
    }

    listarCategoria(): Observable<categoria[]> {
        return this.http.get<categoria[]>(`${this.apiUrl}/public/listarCategoria`);
    }

    listarCor(): Observable<cor[]> {
        return this.http.get<cor[]>(`${this.apiUrl}/public/listarCor`);
    }

    listarFabricante(): Observable<fabricante[]> {
        return this.http.get<fabricante[]>(`${this.apiUrl}/public/listarFabricante`);
    }

    listarCombustivel(): Observable<combustivel[]> {
        return this.http.get<combustivel[]>(`${this.apiUrl}/public/listarCombustivel`);
    }
}
