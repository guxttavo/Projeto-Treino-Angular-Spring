import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import iziToast from 'izitoast';
import { carro } from 'src/app/interfaces/carro';
import { carroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-comparar-carro-dialog',
  templateUrl: './comparar-carro-dialog.component.html',
  styleUrls: ['./comparar-carro-dialog.component.css']
})

export class CompararCarroDialogComponent implements OnInit {

  carros: carro[] = [];
  usuarioId = Number(sessionStorage.getItem("usuario-id"));

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private carroService: carroService) { }

  ngOnInit(): void {
    this.listarCarro();
  }

  listarCarro() {
    this.carroService.listarCarro()
      .subscribe({
        next: (carros: carro[]) => {
          this.carros = carros.filter(carro => carro.usuario.id == this.usuarioId);
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
