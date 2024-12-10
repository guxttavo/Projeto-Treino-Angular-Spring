import { Component, OnInit } from '@angular/core';
import { loginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  usuarioLogado: boolean = false;

  constructor(private loginService: loginService) { }

  
  ngOnInit(): void {
    this.usuarioLogado = this.loginService.verificaLogin();

  }
}
