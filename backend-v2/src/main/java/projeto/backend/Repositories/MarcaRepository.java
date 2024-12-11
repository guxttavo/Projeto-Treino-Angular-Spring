package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Cor;
import projeto.backend.Entities.Marca;

import java.util.List;

public interface MarcaRepository extends JpaRepository<Marca, Long> {

    List<Marca> findAll();

}
