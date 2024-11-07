import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
  }

}
