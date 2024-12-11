package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Categoria;
import projeto.backend.Entities.Cor;
import projeto.backend.Repositories.CategoriaRepository;
import projeto.backend.Repositories.CorRepository;

import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private CorRepository corRepository;

    public List<Categoria> buscarCategorias(){
        return categoriaRepository.findAll();
    }

    public List<Cor> buscarCor(){
        return corRepository.findAll();
    }
}
