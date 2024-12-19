import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from '../../services/login.service';
import iziToast from 'izitoast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  show: boolean = false;
  usuarioLogado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: loginService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.loginService.login(this.form.value.email, this.form.value.senha).subscribe({
        next: () => {
          this.usuarioLogado = false;
          this.router.navigate(['/home']).then(() => { 
            window.location.reload();
          });
        },
        error: () => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao realizar login!',
            position: 'topRight'
          });
        }
      });
    }
  }



}
