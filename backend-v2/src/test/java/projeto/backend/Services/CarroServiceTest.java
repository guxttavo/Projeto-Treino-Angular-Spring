package projeto.backend.Services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import projeto.backend.Entities.Cor;
import projeto.backend.Repositories.CorRepository;

@SpringBootTest
@ActiveProfiles("test")
class CarroServiceTest {

    @Autowired
    private CorRepository corRepository;

    @Test
    void inserirCor() {
        // Criação da entidade
        Cor cor = new Cor();
        cor.setNome("Azul");

        // Salvando a entidade usando o repositório
        Cor corPersistida = corRepository.save(cor);
    }
}
