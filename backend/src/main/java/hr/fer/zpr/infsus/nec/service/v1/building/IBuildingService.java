package hr.fer.zpr.infsus.nec.service.v1.building;

import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingCreateRequestDTO;

import java.util.List;
import java.util.Optional;

public interface IBuildingService {

    Optional<Building> get(Integer id);

    List<Building> getAll();

    Building create(User currentUser, BuildingCreateRequestDTO buildingData);
}
