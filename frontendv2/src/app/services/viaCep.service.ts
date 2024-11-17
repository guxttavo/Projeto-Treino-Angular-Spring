import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { viaCep } from '../interfaces/viaCep';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl;

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string) {
    return this.http.get<viaCep>
      (this.apiUrl + cep + "/json")
      .pipe(
        map((response) => {
          return response;
        })
      )
  }
}
