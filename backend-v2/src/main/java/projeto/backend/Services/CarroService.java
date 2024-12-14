package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.*;
import projeto.backend.Repositories.*;

import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private CorRepository corRepository;
    @Autowired
    private MarcaRepository marcaRepository;
    @Autowired
    private TipoDeCombustivelRepository tipoDeCombustivelRepository;
    @Autowired
    private CarroRepository carroRepository;

    public List<Categoria> buscarCategorias() {
        return categoriaRepository.findAll();
    }

    public List<Cor> buscarCores() {
        return corRepository.findAll();
    }

    public List<Marca> buscarMarcas() {
        return marcaRepository.findAll();
    }

    public List<TipoDeCombustivel> buscarTipoDeCombustive() {
        return tipoDeCombustivelRepository.findAll();
    }

    public Carro buscarCarroPorPlaca(String placa) {
        return carroRepository.findByPlaca(placa);
    }

    public Carro cadastrarCarro(Carro carro){
        return carroRepository.save(carro);
    }
}
