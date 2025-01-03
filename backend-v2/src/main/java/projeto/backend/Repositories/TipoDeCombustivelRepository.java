package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Combustivel;

import java.util.List;

public interface TipoDeCombustivelRepository extends JpaRepository<Combustivel, Long> {

    List<Combustivel> findAll();

}
