package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "tipo_de_combustivel")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TipoDeCombustivel {

    @Id
    @GeneratedValue
    private Long id;
    private String nome;

    @OneToMany
    private List<Carro> carros;
}
