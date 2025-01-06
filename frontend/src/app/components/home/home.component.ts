import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { carroService } from 'src/app/services/carro.service';
import { carro } from 'src/app/interfaces/carro';
import { ConfirmDialogComponent } from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';

import iziToast from 'izitoast';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: boolean = false;
  carros: carro[] = [];
  categorias: { nome: string }[] = [];
  filtroNome: string = '';
  filtroCategoria: string = '';
  usuarioId = Number(sessionStorage.getItem("usuario-id"));

  constructor(
    private authService: AuthService,
    private carroService: carroService,
    public dialog: MatDialog
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
          this.carros = carros.filter(carro=>carro.usuario.id == this.usuarioId);
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

  deletarCarro(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Tem certeza de que deseja excluir este carro?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carroService.deletarCarro(id).subscribe({
          next: () => {
            iziToast.success({
              title: 'Sucesso',
              message: 'Carro excluído com sucesso!',
              position: 'topRight'
            });
            this.listarCarro(); 
          },
          error: (erro) => {
            iziToast.error({
              title: 'Erro',
              message: 'Erro ao excluir o carro!',
              position: 'topRight'
            });
          }
        });
      }
    });
  }

  favoritarCarro(){
    
  }

  filtrarCarros() {
    this.carros = this.carros.filter((carro) => {
      const nomeValido = this.filtroNome
        ? carro.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
        : true;
      const categoriaValida = this.filtroCategoria
        ? carro.categoria.nome === this.filtroCategoria
        : true;
      return nomeValido && categoriaValida;
    });
  }
}
