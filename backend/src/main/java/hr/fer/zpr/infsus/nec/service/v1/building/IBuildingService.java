package hr.fer.zpr.infsus.nec.service.v1.building;

import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingCreateRequestDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingUpdateRequestDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IBuildingService {

    Optional<Building> get(Integer id);

    Page<Building> getAll(Pageable pageable);

    Building create(User currentUser, BuildingCreateRequestDTO buildingData);

    Building update(User currentUser, Integer id, BuildingUpdateRequestDTO buildingData);

    void delete(User currentUser, Integer id);

    long count();
}
