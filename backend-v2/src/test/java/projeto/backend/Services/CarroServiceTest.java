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


        // Criando o carro
        Carro carro = new Carro();
        carro.setNome("Corolla");
        carro.setAno(2022);
        carro.setQuilometragem(15000.0);
        carro.setValorBruto(90000.0);
        carro.setConcessionaria("Concessionária XYZ");
        carro.setPlaca("ABC-1234");
        carro.setDono(1);
        carro.setValorLiquido(85000.0);
        carro.setObservacoes("Carro em perfeito estado");
        carro.setCor(cor);
        carro.setCategoria(categoria);
        carro.setFabricante(fabricante);
        carro.setCombustivel(combustivel);
        carro.setUsuario(usuario);

        // Salvando o carro
        Carro carroPersistido = carroRepository.save(carro);

    }
}
