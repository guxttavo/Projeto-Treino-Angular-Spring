package api.backend.Services;

import api.backend.Entities.DTO.LoginDTO;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final TokenService tokenService;

    public AuthenticationService(
            AuthenticationManager authenticationManager,
            TokenService tokenService
    ) {
        this.authenticationManager = authenticationManager;
        this.tokenService = tokenService;
    }

    public String createToken(LoginDTO login) {
        // 1. Tenta autenticar o usuário com base no login e senha
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(login.getNome(), login.getSenha())
        );

        // 2. Se autenticado com sucesso, gera o token JWT
        return tokenService.generateToken(authentication);
    }
}
