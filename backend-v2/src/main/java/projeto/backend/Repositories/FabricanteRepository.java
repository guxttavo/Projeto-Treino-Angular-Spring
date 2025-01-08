package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Combustivel;
import projeto.backend.Entities.Fabricante;

import java.util.List;
import java.util.Optional;

public interface FabricanteRepository extends JpaRepository<Fabricante, Long> {

    List<Fabricante> findAll();
    Optional<Fabricante> findByNome(String nome);
}
