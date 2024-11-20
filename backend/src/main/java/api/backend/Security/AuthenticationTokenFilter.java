package api.backend.Security;

import api.backend.Entities.Usuario;
import api.backend.Repositories.UsuarioRepository;
import api.backend.Services.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
public class AuthenticationTokenFilter extends OncePerRequestFilter {

    private final TokenService tokenService;
    private final UsuarioRepository usuarioRepository;

    public AuthenticationTokenFilter(TokenService tokenService, UsuarioRepository usuarioRepository) {
        this.tokenService = tokenService;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = getToken(request); // Extrai o token do cabeçalho
        boolean isValid = tokenService.isTokenValid(token);// Verifica se o token é válido

        if (isValid) {
            authenticate(token);
        }

        filterChain.doFilter(request, response);
    }

    private String getToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");// Extrai o cabeçalho "Authorization"
        if (token == null || !token.startsWith("Bearer")) { // Verifica o formato do token
            return null;
        }
        return token.substring(7);// Remove "Bearer " do início do token
    }

    private void authenticate(String token) {
        String login = tokenService.getPayload(token).getSubject();// Extrai o "subject" (normalmente o username) do token
        Optional<Usuario> usuario = usuarioRepository.findByLogin(login);// Busca o usuário no banco de dados

        if (usuario.isPresent()) {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(usuario, null, null);// Cria o objeto de autenticação
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }
    }
}
