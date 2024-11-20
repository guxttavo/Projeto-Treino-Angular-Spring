import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  show: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: loginService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      this.loginService.login(formData).subscribe({
        next: (response) => {
          console.log('Usuário cadastrado com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao cadastrar usuário:', error);
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
