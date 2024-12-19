import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ViacepService } from 'src/app/services/viaCep.service';
import iziToast from 'izitoast';
import { usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  form: FormGroup = new FormGroup({});
  showToast: boolean = false;
  showErrorToast: boolean = false;
  usuario: any;

  constructor(
    private fb: FormBuilder,
    private viaCepService: ViacepService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.preenchimentoCep();

    const usuarioId = this.route.snapshot.params['id'];
    console.log(usuarioId);
    if (usuarioId) {
        // this.carregarDadosUsuario(usuarioId);
    }
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

//   carregarDadosUsuario(usuarioId: number): void {
//     this.usuarioService.buscarUsuarioPorId(usuarioId).subscribe({
//         next: (usuario) => {
//             this.form.patchValue(usuario);
//         },
//         error: (err) => {
//             console.error('Erro ao carregar usuário:', err);
//         }
//     });
// }

  // editarUsuario(usuario: usuario): any {
  //   if (this.form.valid) {
  //     const formData = this.form.getRawValue();

  //     const objetoUsuario: usuario = {
  //       nome: formData.nome,
  //       email: formData.email,
  //       cpf: parseInt(formData.cpf),
  //       telefone: parseInt(formData.telefone),
  //       senha: formData.senha,
  //       cep: parseInt(formData.cep),
  //       logradouro: formData.logradouro,
  //       bairro: formData.bairro,
  //       cidade: formData.cidade,
  //       estado: formData.estado
  //     }
  //     this.usuarioService.cadastrarUsuario(objetoUsuario).subscribe({
  //       next: (response: any) => {
  //         iziToast.success({
  //           title: 'Sucesso',
  //           message: 'Usuário cadastrado com sucesso!',
  //           position: 'topRight'
  //         })
  //         setTimeout(() => {
  //           this.router.navigate(['/home'])
  //         }, 3000)

  //       },
  //       error: (error: any) => {
  //         iziToast.error({
  //           title: 'Erro',
  //           message: 'Ocorreu um problema ao realizar a operação!',
  //           position: 'topRight'
  //         });
  //       }
  //     });
  //   } else {
  //     iziToast.error({
  //       title: 'Erro',
  //       message: 'Valores Inválidos!',
  //       position: 'topRight'
  //     });
  //     console.log("valores invalidos!");
  //   }
  // }

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
