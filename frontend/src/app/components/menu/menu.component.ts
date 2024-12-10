import { Component, OnInit } from '@angular/core';
import { loginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  usuarioLogado: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.authService.usuarioLogado();
  }

  sair(): void {
    sessionStorage.clear();
    this.usuarioLogado = false;
    window.location.reload();
  }

}
