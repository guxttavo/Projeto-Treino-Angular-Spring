package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Carro;
import projeto.backend.Entities.Usuario;

public interface CarroRepository extends JpaRepository<Carro, Long> {

}
