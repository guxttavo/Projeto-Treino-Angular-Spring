package projeto.backend.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.backend.Entities.Usuario;
import projeto.backend.Repositories.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario salvarUsuario(Usuario usuario) {
        return repository.save(usuario);
    }
}
