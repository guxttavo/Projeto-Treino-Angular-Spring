export interface carro {
    nome: string;
    ano: number;
    quilometragem: number;
    valorBruto: number;
    concessionaria: string;
    placa: string;
    donos: number;
    valorLiquido: number;
    categoria: { id: number };
    cor: { id: number };
    marca: { id: number };
    combustivel: { id: number }; 
    observacoes: string;
  }
  