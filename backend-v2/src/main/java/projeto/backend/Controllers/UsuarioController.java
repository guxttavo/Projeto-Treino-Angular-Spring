package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.backend.Entities.DTO.ResponseDTO;
import projeto.backend.Entities.Usuario;
import projeto.backend.Repositories.UsuarioRepository;
import projeto.backend.Services.TokenService;
import projeto.backend.Services.UsuarioService;

import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/cadastrar")
    public ResponseEntity<ResponseDTO> cadastrarUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> verificaUsuario = this.usuarioService.buscarUsuarioPorEmail(usuario.getEmail());

        if (verificaUsuario.isEmpty()) {
            Usuario novoUsuario = new Usuario();
            novoUsuario.setNome(usuario.getNome());
            novoUsuario.setEmail(usuario.getEmail());
            novoUsuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
            novoUsuario.setCpf(usuario.getCpf());
            novoUsuario.setTelefone(usuario.getTelefone());
            novoUsuario.setCep(usuario.getCep());
            novoUsuario.setLogradouro(usuario.getLogradouro());
            novoUsuario.setBairro(usuario.getBairro());
            novoUsuario.setCidade(usuario.getCidade());
            novoUsuario.setEstado(usuario.getEstado());

            this.usuarioService.salvarUsuario(novoUsuario);

            String token = this.tokenService.generateToken(novoUsuario);
            return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
