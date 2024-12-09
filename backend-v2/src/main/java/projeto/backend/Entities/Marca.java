package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "marca")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Marca {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;

    @OneToMany
    private List<Carro> carros;
}
