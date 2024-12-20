import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  usuarioLogado: boolean = false;
  // usuarioId: number | null = null;
  nomeUsuario = sessionStorage.getItem("usuario-nome")?.split(' ')[0] || '';
  usuarioId: number | null = Number(sessionStorage.getItem("usuario-id")) || null;

  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.usuarioLogado();
    
    if (this.usuarioLogado) {
      const usuarioLogadoId = this.usuarioId;
      if (usuarioLogadoId) {
        this.usuarioService.buscarUsuarioPorId(usuarioLogadoId).subscribe({
          next: (usuario) => {
            this.usuarioId = usuario.id;
          }, error: (error: any) => {
            console.error(error);
          }
        }
        )
      }
    }
  }

  sair(): void {
    sessionStorage.clear();
    this.usuarioLogado = false;
    window.location.reload();
  }

}
