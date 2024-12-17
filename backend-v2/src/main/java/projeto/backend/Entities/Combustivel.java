package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "combustivel")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Combustivel {

    @Id
    @GeneratedValue
    private Long id;
    private String nome;

    @OneToMany
    private List<Carro> carros;
}
