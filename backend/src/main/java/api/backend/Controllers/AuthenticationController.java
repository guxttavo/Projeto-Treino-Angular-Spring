package api.backend.Controllers;

import api.backend.Entities.DTO.LoginDTO;
import api.backend.Entities.Usuario;
import api.backend.Repositories.UsuarioRepository;
import api.backend.Services.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final UsuarioRepository usuarioRepository;

    public AuthenticationController(AuthenticationService authenticationService, UsuarioRepository usuarioRepository) {
        this.authenticationService = authenticationService;
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping
    public ResponseEntity<String> authenticate(@RequestBody LoginDTO login) {
        var token = authenticationService.createToken(login);

        return ResponseEntity.ok(token);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> get() {
        return ResponseEntity.ok(usuarioRepository.findAll());
    }
}
