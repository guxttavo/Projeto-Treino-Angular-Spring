package projeto.backend.Services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import projeto.backend.Entities.Usuario;
import projeto.backend.Repositories.UsuarioRepository;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class UsuarioServiceTest {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Test
    void cadastrarUsuario() {
        Usuario usuario = new Usuario();
        usuario.setNome("João da Silva");
        usuario.setEmail("joao@example.com");
        usuario.setSenha("senha123");
        usuario.setCpf(12345678901L);
        usuario.setTelefone(11987654321L);
        usuario.setCep(12345678L);
        usuario.setLogradouro("Rua Exemplo");
        usuario.setBairro("Bairro Exemplo");
        usuario.setCidade("Cidade Exemplo");
        usuario.setEstado("SP");

        Usuario usuarioPersistido = usuarioRepository.save(usuario);

        assertNotNull(usuarioPersistido.getId(), "O ID do usuário não deve ser nulo após persistência");
        assertEquals(usuario.getNome(), usuarioPersistido.getNome(), "O nome do usuário não corresponde");
        assertEquals(usuario.getEmail(), usuarioPersistido.getEmail(), "O email do usuário não corresponde");

        Usuario usuarioDoBanco = usuarioRepository.findById(usuarioPersistido.getId()).orElse(null);
        assertNotNull(usuarioDoBanco, "O usuário não foi encontrado no banco de dados.");
    }
}
