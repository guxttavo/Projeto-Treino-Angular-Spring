package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.TipoDeCombustivel;

import java.util.List;

public interface TipoDeCombustivelRepository extends JpaRepository<TipoDeCombustivel, Long> {

    List<TipoDeCombustivel> findAll();

}
