import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { carro } from 'src/app/interfaces/carro';
import { categoria } from 'src/app/interfaces/categoria';
import { cor } from 'src/app/interfaces/cor';
import { marca } from 'src/app/interfaces/marca';
import { tipoDeCombustivel } from 'src/app/interfaces/tipoDeCombustivel';
import { carroService } from 'src/app/services/carro.service';
import iziToast from 'izitoast';

@Component({
  selector: 'app-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})

export class CadastrarCarroComponent {

  form: FormGroup = new FormGroup({});
  categorias: categoria[] = [];
  cores: cor[] = [];
  marcas: marca[] = [];
  tiposDeCombustiveis: tipoDeCombustivel[] = [];
  startDate: Date = new Date();

  constructor(
    private fb: FormBuilder,
    private carroService: carroService
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.dropDownCategorias();
    this.dropDownCor();
    this.dropDownMarca();
    this.dropDownTipoDeCombustivel();
  }

  initializeForm() {
    console.log(this.form);
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
      marca: ['', Validators.required],
      combustivel: ['', Validators.required],
      observacoes: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();

      const objetoCarro: carro = {
        nome: formData.nome,
        ano: parseInt(formData.ano, 10),
        quilometragem: parseFloat(formData.quilometragem.replace(/\./g, '').replace(',', '.')),
        valorBruto: parseFloat(formData.valorBruto.replace(/\./g, '').replace(',', '.')),
        concessionaria: formData.concessionaria,
        placa: formData.placa,
        dono: parseInt(formData.donos, 10),
        valorLiquido: parseFloat(formData.valorLiquido.replace(/\./g, '').replace(',', '.')),
        categoria: { id: parseInt(formData.categoria, 10) },
        cor: { id: parseInt(formData.cor, 10) },
        marca: { id: parseInt(formData.marca, 10) },
        combustivel: { id: parseInt(formData.combustivel, 10) },
        observacoes: formData.observacoes,
      };

      this.carroService.cadastrarCarro(objetoCarro).subscribe({
        next: (response: any) => {
          iziToast.success({
            title: 'Sucesso',
            message: 'Carro cadastrado com sucesso!',
            position: 'topRight'
          })
        },
        error: (erro: any) => {
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

  dropDownCategorias() {
    this.carroService.buscarCategorias()
      .subscribe({
        next: (categorias: categoria[]) => {
          this.categorias = categorias;
        },
        error: (erro) => {
          console.error('Erro ao buscar categorias:', erro);
        }
      });
  }

  dropDownCor() {
    this.carroService.buscarCores()
      .subscribe({
        next: (cores: cor[]) => {
          this.cores = cores;
        },
        error: (erro) => {
          console.error('Erro ao buscar cores:', erro);
        }
      });
  }

  dropDownMarca() {
    this.carroService.buscarMarcas()
      .subscribe({
        next: (marcas: marca[]) => {
          this.marcas = marcas;
        },
        error: (erro) => {
          console.error('Erro ao buscar marcas:', erro);
        }
      });
  }

  dropDownTipoDeCombustivel() {
    this.carroService.buscarTiposDeCombustiveis()
      .subscribe({
        next: (tiposDeCombustiveis: tipoDeCombustivel[]) => {
          this.tiposDeCombustiveis = tiposDeCombustiveis;
        },
        error: (erro) => {
          console.error('Erro ao buscar tiposDeCombustiveis:', erro);
        }
      });
  }
}
