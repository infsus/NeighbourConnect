package hr.fer.zpr.infsus.nec.service.v1.building;

import hr.fer.zpr.infsus.nec.dao.v1.BuildingRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingCreateRequestDTO;
import hr.fer.zpr.infsus.nec.service.v1.buildingentrance.IBuildingEntranceService;
import hr.fer.zpr.infsus.nec.service.v1.meta.IMetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BuildingService implements IBuildingService {

    private final BuildingRepository buildingRepository;
    private final IMetaService metaService;
    private final IBuildingEntranceService buildingEntranceService;

    @Override
    public Optional<Building> get(Integer id) {
        return buildingRepository.findById(id);
    }

    @Override
    public List<Building> getAll() {
        return buildingRepository.findAll();
    }

    @Override
    public Building create(User currentUser, BuildingCreateRequestDTO buildingData) {
        // Check dates
        if (!buildingData.buildingStartDate().isBefore(buildingData.buildingEndDate())) {
            throw new IllegalArgumentException("Building start date must be before the building end date");
        }

        // Check name
        if (buildingData.name().isEmpty()) {
            throw new IllegalArgumentException("Building name cannot be empty");
        }

        // Check entrances
        if (buildingData.entrances().isEmpty()) {
            throw new IllegalArgumentException("Building must have at least one entrance");
        }

        // Create meta for building
        Meta meta = metaService.create(currentUser, currentUser);

        // Create building
        Building building = new Building(
                buildingData.buildingStartDate(),
                buildingData.buildingEndDate(),
                meta,
                buildingData.name()
        );
        building = buildingRepository.save(building);

        // Create entrances
        for (var entrance : buildingData.entrances()) {
            buildingEntranceService.create(
                    currentUser,
                    building.getId(),
                    entrance.tenantRepresentativeId(),
                    entrance.streetId(),
                    entrance.streetNumber()
            );
        }

        return building;
    }
}
