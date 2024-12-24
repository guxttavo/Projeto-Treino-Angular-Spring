package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.*;

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
    private Long id;
    private String nome;
    private Integer ano;
    private Double quilometragem;
    private Double valorBruto;
    private String concessionaria;
    private String placa;
    private Integer dono;
    private Double valorLiquido;
    private String observacoes;

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
    @JoinColumn(name = "fabricante_id")
    private Fabricante fabricante;

    @ManyToOne
    @JoinColumn(name = "combustivel_id")
    private Combustivel combustivel;
}
