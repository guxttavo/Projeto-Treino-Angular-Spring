import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViacepService } from '../../services/viacep.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private viaCepService: ViacepService) {

  }

  ngOnInit(): void {
    this.initializeForm();
    this.observePreenchimentoCep();
  }

  initializeForm() {
    this.form = this.fb.group({
      cep: ['', [Validators.required]],
      logradouro: [{value: '', disabled: true}],
      bairro: [{value: '', disabled: true}],
      cidade: [{value: '', disabled: true}],
      estado: [{value: '', disabled: true}],
    })
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
