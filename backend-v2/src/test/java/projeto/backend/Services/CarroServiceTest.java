package projeto.backend.Services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import projeto.backend.Entities.*;
import projeto.backend.Repositories.*;

@SpringBootTest
@ActiveProfiles("test")
class CarroServiceTest {

    @Autowired
    private CorRepository corRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private FabricanteRepository fabricanteRepository;

    @Autowired
    private CombustivelRepository combustivelRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CarroRepository carroRepository;

//    @Test
//    void inserirCor() {
//        // Criação da entidade
//        Cor cor = new Cor();
//        cor.setNome("Rosa");
//
//        // Salvando a entidade usando o repositório
//        Cor corPersistida = corRepository.save(cor);
//    }

    @Test
    void cadastrarCarro() {
        // Preparando as entidades relacionadas
        Cor cor = corRepository.findByNome("Branco")
                .orElseThrow(() -> new IllegalArgumentException("Cor 'Branca' não encontrada no banco de dados"));

        Categoria categoria = categoriaRepository.findByNome("Hatchback")
                .orElseThrow(() -> new IllegalArgumentException("Categoria 'Hatchback' não encontrada no banco de dados"));

        Fabricante fabricante = fabricanteRepository.findByNome("Toyota")
                .orElseThrow(() -> new IllegalArgumentException("Fabricante 'Toyota' não encontrado no banco de dados"));

        Combustivel combustivel = combustivelRepository.findByNome("Gasolina")
                .orElseThrow(() -> new IllegalArgumentException("Combustível 'Gasolina' não encontrado no banco de dados"));

        Usuario usuario = usuarioRepository.findById(2L)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado no banco de dados"));

        for (int i = 1; i <= 10; i++) {
            Carro carro = new Carro();
            carro.setNome("Carro Modelo " + i);
            carro.setAno(2020 + i);
            carro.setQuilometragem(15000.0 + (i * 1000));
            carro.setValorBruto(90000.0 + (i * 5000));
            carro.setConcessionaria("Concessionária XYZ " + i);
            carro.setPlaca("ABC-123" + i);
            carro.setDono(1);
            carro.setValorLiquido(85000.0 + (i * 4000));
            carro.setObservacoes("Carro " + i + " em perfeito estado");
            carro.setCor(cor);
            carro.setCategoria(categoria);
            carro.setFabricante(fabricante);
            carro.setCombustivel(combustivel);
            carro.setUsuario(usuario);

            // Salvando cada carro
            Carro carroPersistido = carroRepository.save(carro);
        }
    }
}
