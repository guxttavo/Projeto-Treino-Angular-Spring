package api.projeto.API.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "usuario")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    private String nome;
    private String email;
    private String senha;
    private Long cpf;
    private Long telefone;
    private Long cep;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String estado;
}
