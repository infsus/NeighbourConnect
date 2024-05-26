package hr.fer.zpr.infsus.nec.dao.v1;

import hr.fer.zpr.infsus.nec.domain.v1.Street;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreetRepository extends JpaRepository<Street, Integer> {
}
