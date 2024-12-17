import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

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
  
  pegarUsuarioIdToken(): number | undefined {
    const token = sessionStorage.getItem('usuario-id');
    if (token) {
      const usuarioId = Number(token); // Converte o valor para número
      if (!isNaN(usuarioId)) {
        return usuarioId;
      }
      console.error('O valor de usuario-id não é um número válido.');
      return undefined;
    } else {
      console.warn('Chave usuario-id não encontrada no sessionStorage.');
      return undefined;
    }
  }

}
