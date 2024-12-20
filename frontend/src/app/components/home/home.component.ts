import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  usuarioLogado: boolean = false;

  constructor(private authService: AuthService) { }

  
  ngOnInit(): void {
    this.usuarioLogado = this.authService.usuarioLogado();
  }
}
