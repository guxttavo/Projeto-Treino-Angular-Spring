import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { viaCepResult } from '../interfaces/viaCepResult';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  apiUrl: string = environment.viaCepUrl;

  constructor(private http: HttpClient) { }

  getEnderecoByCep(cep: string) {
    return this.http.get<viaCepResult>
      (this.apiUrl + cep + "/json")
      .pipe(
        map((response) => {
          return response;
        })
      )
  }
}
