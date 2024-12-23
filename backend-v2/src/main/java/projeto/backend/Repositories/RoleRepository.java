package projeto.backend.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projeto.backend.Entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
