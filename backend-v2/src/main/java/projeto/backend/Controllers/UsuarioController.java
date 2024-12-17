package projeto.backend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import projeto.backend.Entities.DTO.ResponseDTO;
import projeto.backend.Entities.Usuario;
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

    @PostMapping("/cadastrarUsuario")
    public ResponseEntity<ResponseDTO> cadastrarUsuario(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioExistente = this.usuarioService.buscarUsuarioPorEmail(usuario.getEmail());

        if (usuarioExistente.isEmpty()) {
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

            this.usuarioService.cadastrarUsuario(novoUsuario);

            String token = this.tokenService.generateToken(novoUsuario);
            return ResponseEntity.ok(new ResponseDTO(novoUsuario.getNome(), token, novoUsuario.getId()));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/buscarPorId/{id}")
    public ResponseEntity<Optional<Usuario>> buscarUsuario(@PathVariable Long id){
        Optional<Usuario> usuario = usuarioService.buscarUsuarioPorId(id);

        return ResponseEntity.ok(usuario);
    }
}
