import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../../services/login.service';
import { Router } from '@angular/router';

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
        next: (response) => {
          console.log('Usuário logado', response);
          this.usuarioLogado = false;
          this.router.navigate(['/home']).then(() => { 
            window.location.reload();
          });
        },
        error: (error) => {
          console.error('Erro ao realizar o login :', error);
        }
      });
    } else {
      console.log("valores invalidos!")
    }
  }

  showToast(): void {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
