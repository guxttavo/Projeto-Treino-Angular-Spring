package projeto.backend.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "role")
@Getter
@Setter
public class Role {

    @Id
    @GeneratedValue
    private Long id;
    private String nome;

    public enum Roles{
        BASIC(1L),
        ADMIN(2l);

        long id;

        Roles(long id){
            this.id = id;
        }

        public long getId() {
            return id;
        }
    }
}
