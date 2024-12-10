import { Component, OnInit } from '@angular/core';
import { loginService } from '../../services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  usuarioLogado: boolean = false;

  constructor(private loginService: loginService) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.verificaLogin();
  }

  sair(): void {
    sessionStorage.clear();
    this.usuarioLogado = false;
    window.location.reload();
  }

}
