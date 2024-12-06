package api.projeto.API.Services;

import api.projeto.API.Entities.Usuario;
import api.projeto.API.Repositories.UsuarioRepository;
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
