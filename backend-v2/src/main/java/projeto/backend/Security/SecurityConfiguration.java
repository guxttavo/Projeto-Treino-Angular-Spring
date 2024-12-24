package projeto.backend.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    private final AuthenticationTokenFilter filter;
    private final CustomUserDetailsService customUserDetailsService;

    public SecurityConfiguration(AuthenticationTokenFilter filter, CustomUserDetailsService customUserDetailsService) {
        this.filter = filter;
        this.customUserDetailsService = customUserDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/usuario/cadastrarUsuario").permitAll()
                        .requestMatchers(HttpMethod.GET, "/usuario/buscarPorId/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/usuario/buscarUsuarioPorNome/**").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/usuario/editarUsuario/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/carro/cadastrarCarro").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/carro/editarCarro/**").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/carro/deletarCarro/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/deletarCarro/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/listarCarro/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/buscarCarroPorId/**").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/listarCor").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/listarFabricante").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/listarCombustivel").permitAll()
                        .requestMatchers(HttpMethod.GET, "/carro/listarCategoria").permitAll()
                        .anyRequest().authenticated()
                )
                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:4200");
        configuration.addAllowedOrigin("http://localhost:8080");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
