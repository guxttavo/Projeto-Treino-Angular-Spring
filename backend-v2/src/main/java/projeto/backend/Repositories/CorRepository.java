package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Categoria;
import projeto.backend.Entities.Cor;

import java.util.List;
import java.util.Optional;

public interface CorRepository extends JpaRepository<Cor, Long> {

    List<Cor> findAll();
    Optional<Cor> findByNome(String nome);

}
