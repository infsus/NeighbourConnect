package hr.fer.zpr.infsus.nec.service.v1.building;

import hr.fer.zpr.infsus.nec.dao.v1.BuildingRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingCreateRequestDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingUpdateRequestDTO;
import hr.fer.zpr.infsus.nec.service.v1.buildingentrance.IBuildingEntranceService;
import hr.fer.zpr.infsus.nec.service.v1.meta.IMetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BuildingService implements IBuildingService {

    private final BuildingRepository buildingRepository;
    private final IMetaService metaService;
    private final IBuildingEntranceService buildingEntranceService;

    @Override
    public Optional<Building> get(Integer id) {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);
        Building probe = new Building();
        probe.setId(id);
        probe.setMeta(metaProbe);

        Example<Building> example = Example.of(probe);

        return buildingRepository.findOne(example);
    }

    @Override
    public Page<Building> getAll(Pageable pageable) {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);

        Building probe = new Building();
        probe.setMeta(metaProbe);

        Example<Building> example = Example.of(probe);

        return buildingRepository.findAll(example, pageable);
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

    @Override
    public Building update(User currentUser, Integer id, BuildingUpdateRequestDTO buildingData) {
        // Get building
        Optional<Building> buildingOptional = get(id);
        if (buildingOptional.isEmpty()) {
            throw new IllegalArgumentException("Building not found");
        }
        Building building = buildingOptional.get();

        // Fetch dates if provided
        if (buildingData.buildingStartDate().isPresent()) {
            building.setBuildingStartDate(buildingData.buildingStartDate().get());
        }
        if (buildingData.buildingEndDate().isPresent()) {
            building.setBuildingEndDate(buildingData.buildingEndDate().get());
        }

        // Check dates
        if (!building.getBuildingStartDate().isBefore(building.getBuildingEndDate())) {
            throw new IllegalArgumentException("Building start date must be before the building end date");
        }

        // Fetch name if provided
        if (buildingData.name().isPresent()) {
            building.setName(buildingData.name().get());
        }

        // Check name
        if (building.getName().isEmpty()) {
            throw new IllegalArgumentException("Building name cannot be empty");
        }

        // Update meta
        Meta meta = metaService.updateModifier(building.getMeta().getId(), currentUser);
        building.setMeta(meta);

        // Save building
        return buildingRepository.save(building);
    }

    @Override
    public void delete(User currentUser, Integer id) {
        // Get building
        Optional<Building> buildingOptional = get(id);
        if (buildingOptional.isEmpty()) {
            throw new IllegalArgumentException("Building not found");
        }
        Building building = buildingOptional.get();

        // Update meta
        Meta meta = metaService.markDeleted(building.getMeta().getId(), currentUser);
        building.setMeta(meta);

        // Delete building
        buildingRepository.save(building);
    }

    @Override
    public long count() {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);
        Building probe = new Building();
        probe.setMeta(metaProbe);

        Example<Building> example = Example.of(probe);

        return buildingRepository.count(example);
    }
}
