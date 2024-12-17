package projeto.backend.Controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projeto.backend.Entities.DTO.LoginDTO;
import projeto.backend.Entities.DTO.ResponseDTO;
import projeto.backend.Entities.Usuario;
import projeto.backend.Repositories.UsuarioRepository;
import projeto.backend.Services.TokenService;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginDTO login) {
        Usuario usuario = this.usuarioRepository.findByEmail(login.email()).orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(login.senha(), usuario.getSenha())) {
            String token = this.tokenService.generateToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getUsername(), token, usuario.getId()));
        }
        return ResponseEntity.badRequest().build();
    }
}