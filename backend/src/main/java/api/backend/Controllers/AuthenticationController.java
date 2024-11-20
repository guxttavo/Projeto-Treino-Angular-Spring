package api.backend.Controllers;

import api.backend.Entities.DTO.LoginDTO;
import api.backend.Entities.DTO.ResponseDTO;
import api.backend.Entities.Usuario;
import api.backend.Repositories.UsuarioRepository;
import api.backend.Services.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginDTO login) {
        Usuario usuario = this.usuarioRepository.findByEmail(login.nome()).orElseThrow(() -> new RuntimeException("User not found"));

        if (passwordEncoder.matches(login.senha(), usuario.getPassword())) {
            String token = this.tokenService.generateToken(usuario);
            return ResponseEntity.ok(new ResponseDTO(usuario.getUsername(), token));
        }
        return ResponseEntity.badRequest().build();
    }
}
