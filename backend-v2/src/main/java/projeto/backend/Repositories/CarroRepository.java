package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projeto.backend.Entities.Carro;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

    Carro findByPlaca(String placa);
}
