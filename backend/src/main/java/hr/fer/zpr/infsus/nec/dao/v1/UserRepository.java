package hr.fer.zpr.infsus.nec.dao.v1;

import hr.fer.zpr.infsus.nec.domain.v1.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByEmail(String email);
}
