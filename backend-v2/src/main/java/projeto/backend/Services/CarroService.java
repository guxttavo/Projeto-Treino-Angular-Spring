package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Categoria;
import projeto.backend.Repositories.CategoriaRepository;

import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CategoriaRepository repository;

    public List<Categoria> buscarCategorias(){
        return repository.findAll();
    }

}
