package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Combustivel;
import projeto.backend.Entities.Cor;

import java.util.List;
import java.util.Optional;

public interface CombustivelRepository extends JpaRepository<Combustivel, Long> {

    List<Combustivel> findAll();
    Optional<Combustivel> findByNome(String nome);


}
