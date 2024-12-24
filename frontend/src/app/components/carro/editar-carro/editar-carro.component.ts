import { Component } from '@angular/core';
import { categoria } from 'src/app/interfaces/categoria';
import { cor } from 'src/app/interfaces/cor';
import { fabricante } from 'src/app/interfaces/fabricante';
import { combustivel } from 'src/app/interfaces/combustivel';
import { carroService } from 'src/app/services/carro.service';
import iziToast from 'izitoast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-carro',
  templateUrl: './editar-carro.component.html',
  styleUrls: ['./editar-carro.component.css']
})
export class EditarCarroComponent {

  constructor(
    private fb: FormBuilder,
    private carroService: carroService,
    private route: ActivatedRoute
  ) {
  }

  categorias: categoria[] = [];
  cores: cor[] = [];
  fabricantes: fabricante[] = [];
  combustiveis: combustivel[] = [];
  usuarioId = Number(sessionStorage.getItem("usuario-id"));

  form: FormGroup = new FormGroup({});
  carroId = Number(this.route.snapshot.paramMap.get('id'));

  ngOnInit(): void {
    this.initializeForm();
    this.listarCategoria();
    this.listarCor();
    this.listarFabricante();
    this.listarCombustivel();
    this.carregarDadosCarro(this.carroId);
    console.log(this.carroId);

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
      usuario: this.carroId
    });
  }

  editarCarro(): void {

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
        error: () => {
          iziToast.error({
            title: 'Erro',
            message: 'Erro ao carregar combustíveis!',
            position: 'topRight'
          });
        }
      });
  }

  carregarDadosCarro(carroId: number) {
    this.carroService.buscarCarroPorId(carroId).subscribe(
      {
        next: (carro) => {
          this.form.patchValue({
            nome: carro.nome,
            ano: carro.ano,
            quilometragem: carro.quilometragem,
            valorBruto: carro.valorBruto,
            concessionaria: carro.concessionaria,
            placa: carro.placa,
            donos: carro.dono,
            categoria: carro.categoria.id,
            cor: carro.cor.id,
            fabricante: carro.fabricante.id, 
            combustivel: carro.combustivel.id,
            valorLiquido: carro.valorLiquido,
            observacoes: carro.observacoes,
            usuario: this.usuarioId
          });
        },
        error: () => {
          console.log('Erro ao carregar dados do usuário!');
        }
      }
    );
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
