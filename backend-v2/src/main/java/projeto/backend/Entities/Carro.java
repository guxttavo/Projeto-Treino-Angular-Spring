package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "carro")
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Carro {

    @Id
    @GeneratedValue
    private UUID id;
    private boolean novo;
    private BigDecimal valorBruto;
    private BigDecimal valorLiquido;
    private String nome;
    private Integer ano;
    private Integer quilometragem;
    private String concessionaria;
    private String placa;
    private Integer numeroDeDonos;
    private String possiveisProblemas;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "cor_id")
    private Cor cor;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

    @ManyToOne
    @JoinColumn(name = "tipo_de_combustivel_id")
    private TipoDeCombustivel tipoDeCombustivel;
}
