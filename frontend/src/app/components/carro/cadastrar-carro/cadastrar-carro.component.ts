import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoria } from 'src/app/interfaces/categoria';
import { cor } from 'src/app/interfaces/cor';
import { marca } from 'src/app/interfaces/marca';
import { tipoDeCombustivel } from 'src/app/interfaces/tipoDeCombustivel';
import { carroService } from 'src/app/services/carro.service';

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
  minDate: Date = new Date(2000, 0, 1);
  maxDate: Date = new Date(new Date().getFullYear(), 12, 31);

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
    this.form = this.fb.group({
      nome: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900), Validators.max(2099)]],
      quilometragem: ['', Validators.required],
      concessionaria: ['', Validators.required],
      placa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      numeroDeDonos: ['', Validators.required],
      categoria: ['', Validators.required],
      cor: ['', Validators.required],
      marca: ['', Validators.required],
      combustivel: ['', Validators.required],
      valorBruto: ['', Validators.required],
      valorLiquido: ['', Validators.required],
      observacoes: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      console.log(formData);
    }
  }

  formatarParaMilhar(event: Event, formControlName: string) {
    const input = event.target as HTMLInputElement;
    const valorNumerico = parseInt(input.value.replace(/\D/g, ''), 10);
    const valorFormatado = valorNumerico.toLocaleString('pt-BR');

    this.form.get(formControlName)?.setValue(valorFormatado);
  }

  formatarPlaca(event: Event){
    const input = event.target as HTMLInputElement
    const valorFormatado = input.value.toUpperCase();
    
    this.form.get('placa')?.setValue(valorFormatado);
  }

  anoSelecionado(event: any, picker: any) {
    const ano = event.getFullYear();
    this.form.get('ano')?.setValue(ano);
    picker.close();
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
