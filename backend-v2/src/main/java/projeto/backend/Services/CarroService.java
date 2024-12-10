package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Categoria;
import projeto.backend.Repositories.CategoriaRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CarroService {

    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> buscarCategoriaPorNome(String nome){
        return repository.findByNome(nome);
    }

}
