package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "fabricante")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Fabricante {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;

    @OneToMany
    private List<Carro> carros;
}
