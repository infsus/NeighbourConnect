package hr.fer.zpr.infsus.nec.dao.v1;

import hr.fer.zpr.infsus.nec.domain.v1.Building;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildingRepository extends JpaRepository<Building, Integer> {
}
