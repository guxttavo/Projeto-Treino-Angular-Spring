import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViacepService } from '../../services/viacep.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private viaCepService: ViacepService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.observePreenchimentoCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cep: ['', [Validators.required]],
      logradouro: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      this.authService.registerUser(formData).subscribe({
        next: (response) => {
          console.log('Usuário cadastrado com sucesso:', response);
        },
        error: (error) => {
          console.error('Erro ao cadastrar usuário:', error);
        }
      });
    } else {
      console.log("valores invalidos!");
    }
  }

  observePreenchimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if (value?.length == 8) {
        this.buscarCep();
      }
    })
  }

  buscarCep() {
    var cep = this.form.get('cep')?.value;
    this.viaCepService.getEnderecoByCep(cep).subscribe(
      {
        next: (response) => {
          this.form.patchValue({
            logradouro: response.logradouro,
            bairro: response.bairro,
            cidade: response.localidade,
            estado: response.uf
          })
        },
        error: () => {
          console.log("Erro ao buscar CEP!")
        }
      }
    )
  }
}
