package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Categoria;

import java.util.List;
import java.util.Optional;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

    List<Categoria> findByNome(String nome);

}
