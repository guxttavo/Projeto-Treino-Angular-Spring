import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { carro } from 'src/app/interfaces/carro';
import { categoria } from 'src/app/interfaces/categoria';
import { cor } from 'src/app/interfaces/cor';
import { fabricante } from 'src/app/interfaces/fabricante';
import { combustivel } from 'src/app/interfaces/combustivel';
import { carroService } from 'src/app/services/carro.service';
import iziToast from 'izitoast';

@Component({
  selector: 'app-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})

export class CadastrarCarroComponent {

  categorias: categoria[] = [];
  cores: cor[] = [];
  fabricantes: fabricante[] = [];
  combustiveis: combustivel[] = [];

  form: FormGroup = new FormGroup({});
  usuarioId = Number(sessionStorage.getItem("usuario-id"));

  constructor(
    private fb: FormBuilder,
    private carroService: carroService,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.listarCategoria();
    this.listarCor();
    this.listarFabricante();
    this.listarCombustivel();
  }

  initializeForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      ano: ['', Validators.required],
      quilometragem: ['', Validators.required],
      valorBruto: ['', Validators.required],
      concessionaria: ['', Validators.required],
      placa: ['', Validators.required],
      donos: ['', Validators.required],
      categoria: ['', Validators.required],
      valorLiquido: ['', Validators.required],
      cor: ['', Validators.required],
      fabricante: ['', Validators.required],
      combustivel: ['', Validators.required],
      observacoes: ['', Validators.required],
      usuario: this.usuarioId
    });
  }

  cadastrarCarro(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();

      const objetoCarro: carro = {
        id: null,
        nome: formData.nome,
        ano: formData.ano,
        quilometragem: parseFloat(formData.quilometragem.replace(/\./g, '').replace(',', '.')),
        valorBruto: parseFloat(formData.valorBruto.replace(/\./g, '').replace(',', '.')),
        concessionaria: formData.concessionaria,
        placa: formData.placa,
        dono: parseInt(formData.donos, 10),
        valorLiquido: parseFloat(formData.valorLiquido.replace(/\./g, '').replace(',', '.')),
        categoria: { id: parseInt(formData.categoria, 10) },
        cor: { id: parseInt(formData.cor, 10) },
        fabricante: { id: parseInt(formData.fabricante, 10) },
        combustivel: { id: parseInt(formData.combustivel, 10) },
        observacoes: formData.observacoes,
        usuario: { id: parseInt(formData.usuario, 10) }
      };

      this.carroService.cadastrarCarro(objetoCarro).subscribe({
        next: () => {
          iziToast.success({
            title: 'Sucesso',
            message: 'Carro cadastrado com sucesso!',
            position: 'topRight'
          })
        },
        error: () => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao cadastrar carro!',
            position: 'topRight'
          });
        }
      });
    } else {
      console.error("Erro: Formulário inválido!");
    }
  }

  listarCategoria() {
    this.carroService.listarCategoria()
      .subscribe({
        next: (categorias: categoria[]) => {
          this.categorias = categorias;
        },
        error: (erro) => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar categorias!',
            position: 'topRight'
          });
        }
      });
  }

  listarCor() {
    this.carroService.listarCor()
      .subscribe({
        next: (cores: cor[]) => {
          this.cores = cores;
        },
        error: (erro) => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar cores!',
            position: 'topRight'
          });
        }
      });
  }

  listarFabricante() {
    this.carroService.listarFabricante()
      .subscribe({
        next: (Fabricantes: fabricante[]) => {
          this.fabricantes = Fabricantes;
        },
        error: (erro) => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar fabricantes!',
            position: 'topRight'
          });
        }
      });
  }

  listarCombustivel() {
    this.carroService.listarCombustivel()
      .subscribe({
        next: (combustiveis: combustivel[]) => {
          this.combustiveis = combustiveis;
        },
        error: (erro) => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar combustíveis!',
            position: 'topRight'
          });
        }
      });
  }

  formatarParaMilhar(event: Event, formControlName: string) {
    const input = event.target as HTMLInputElement;
    const valorNumerico = parseInt(input.value.replace(/\D/g, ''), 10);
    const valorFormatado = valorNumerico.toLocaleString('pt-BR');

    this.form.get(formControlName)?.setValue(valorFormatado);
  }

  formatarPlaca(event: Event) {
    const input = event.target as HTMLInputElement
    const valorFormatado = input.value.toUpperCase();

    this.form.get('placa')?.setValue(valorFormatado);
  }
}
