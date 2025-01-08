package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "cor")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cor {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String nome;

    @OneToMany
    private List<Carro> carros;
}
