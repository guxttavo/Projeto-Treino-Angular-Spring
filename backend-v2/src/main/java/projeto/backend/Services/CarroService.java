package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.*;
import projeto.backend.Repositories.*;

import java.util.List;
import java.util.Optional;

@Service
public class CarroService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Autowired
    private CorRepository corRepository;
    @Autowired
    private FabricanteRepository fabricanteRepository;
    @Autowired
    private TipoDeCombustivelRepository tipoDeCombustivelRepository;
    @Autowired
    private CarroRepository carroRepository;

    public List<Categoria> listarCategoria() {
        return categoriaRepository.findAll();
    }

    public List<Cor> listarCor() {
        return corRepository.findAll();
    }

    public List<Fabricante> listarFabricante() {
        return fabricanteRepository.findAll();
    }

    public List<Combustivel> listarCombustivel() {
        return tipoDeCombustivelRepository.findAll();
    }

    public Optional<Carro> buscarCarroPorPlaca(String placa) {
        return carroRepository.findByPlaca(placa);
    }

    public List<Carro> listarCarro(){
        return  carroRepository.findAll();
    }

    public Carro cadastrarCarro(Carro carro){
        return carroRepository.save(carro);
    }
}
