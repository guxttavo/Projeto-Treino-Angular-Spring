package api.backend.Services;

import api.backend.Entities.Usuario;
import api.backend.Repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario salvarUsuario(Usuario usuario) {
        return repository.save(usuario);
    }
}
