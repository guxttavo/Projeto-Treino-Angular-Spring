import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ViacepService } from 'src/app/services/viaCep.service';
import iziToast from 'izitoast';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {

  form: FormGroup = new FormGroup({});
  showToast: boolean = false;
  showErrorToast: boolean = false;
  usuarioId = Number(sessionStorage.getItem("usuario-id"));

  constructor(
    private fb: FormBuilder,
    private viaCepService: ViacepService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.preenchimentoCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      confirmarSenha: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      logradouro: [{ value: '', disabled: true }],
      bairro: [{ value: '', disabled: true }],
      cidade: [{ value: '', disabled: true }],
      estado: [{ value: '', disabled: true }],
    }, { validators: this.senhasDevemCoincidir });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();

      const objetoUsuario: usuario = {
        id: null,
        nome: formData.nome,
        email: formData.email,
        cpf: parseInt(formData.cpf),
        telefone: parseInt(formData.telefone),
        senha: formData.senha,
        cep: parseInt(formData.cep),
        logradouro: formData.logradouro,
        bairro: formData.bairro,
        cidade: formData.cidade,
        estado: formData.estado
      }
      this.usuarioService.cadastrarUsuario(objetoUsuario).subscribe(
        {
          next: () => {
            iziToast.success({
              title: 'Sucesso',
              message: 'Usuário cadastrado com sucesso!',
              position: 'topRight'
            })
            setTimeout(() => {
              this.router.navigate(['/home'])
            }, 3000)

          },
          error: () => {
            iziToast.error({
              title: 'Erro',
              message: 'Ocorreu um problema ao realizar a operação!',
              position: 'topRight'
            });
          }
        });
    } else {
      iziToast.error({
        title: 'Erro',
        message: 'Valores Inválidos!',
        position: 'topRight'
      });
    }
  }

  senhasDevemCoincidir(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha');

    if (senha !== confirmarSenha?.value) {
      confirmarSenha?.setErrors({ Mustmatch: true });
    } else {
      confirmarSenha?.setErrors(null);
    }
  }

  preenchimentoCep() {
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
