package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Categoria;
import projeto.backend.Entities.Cor;
import projeto.backend.Entities.Marca;
import projeto.backend.Entities.TipoDeCombustivel;
import projeto.backend.Repositories.CategoriaRepository;
import projeto.backend.Repositories.CorRepository;
import projeto.backend.Repositories.MarcaRepository;
import projeto.backend.Repositories.TipoDeCombustivelRepository;

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

    public List<Categoria> buscarCategorias(){
        return categoriaRepository.findAll();
    }

    public List<Cor> buscarCores(){
        return corRepository.findAll();
    }

    public List<Marca> buscarMarcas(){
        return marcaRepository.findAll();
    }

    public List<TipoDeCombustivel> buscarTipoDeCombustive(){
        return tipoDeCombustivelRepository.findAll();
    }
}