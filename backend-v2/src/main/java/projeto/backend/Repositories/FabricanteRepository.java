package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Fabricante;

import java.util.List;

public interface FabricanteRepository extends JpaRepository<Fabricante, Long> {

    List<Fabricante> findAll();

}
