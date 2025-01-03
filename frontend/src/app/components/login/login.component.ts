import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from '../../services/login.service';
import iziToast from 'izitoast';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  show: boolean = false;
  usuarioLogado: boolean = false;
  userProfile: any;

  constructor(
    private fb: FormBuilder,
    private loginService: loginService,
    private router: Router,
    private readonly githubApi: GithubApiService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });

    if (this.githubApi.idendityClaims) {
      this.githubApi.userProfile.subscribe((profile) => {
        this.userProfile = profile;
      })
    }
  }

  logar(): void {
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

  logarComGitHub() {
    this.githubApi.login();
  }
}
