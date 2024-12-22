import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { carroService } from 'src/app/services/carro.service';
import { carro } from 'src/app/interfaces/carro';
import iziToast from 'izitoast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: boolean = false;
  carros: carro[] = [];

  constructor(
    private authService: AuthService,
    private carroService: carroService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.usuarioLogado();
    if (this.usuarioLogado) {
      this.listarCarro();
    }
  }

  listarCarro() {
    this.carroService.listarCarro()
      .subscribe({
        next: (carros: carro[]) => {
          this.carros = carros
        },
        error: (erro) => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar carros!',
            position: 'topRight'
          });
        }
      })
  }
}
