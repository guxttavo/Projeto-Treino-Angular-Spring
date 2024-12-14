package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Usuario;
import projeto.backend.Repositories.UsuarioRepository;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> buscarUsuarioPorEmail(String email){
        return usuarioRepository.findByEmail(email);
    }
}
