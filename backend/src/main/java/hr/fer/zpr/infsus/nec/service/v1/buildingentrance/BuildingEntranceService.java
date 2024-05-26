package hr.fer.zpr.infsus.nec.service.v1.buildingentrance;

import hr.fer.zpr.infsus.nec.dao.v1.BuildingEntranceRepository;
import hr.fer.zpr.infsus.nec.dao.v1.BuildingRepository;
import hr.fer.zpr.infsus.nec.domain.v1.*;
import hr.fer.zpr.infsus.nec.service.v1.meta.IMetaService;
import hr.fer.zpr.infsus.nec.service.v1.resident.IResidentService;
import hr.fer.zpr.infsus.nec.service.v1.street.IStreetService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BuildingEntranceService implements IBuildingEntranceService {

    private final BuildingEntranceRepository buildingEntranceRepository;
//    private final IBuildingService buildingService;   // TODO: Solve circular dependencies and don't depend on repo
    private final BuildingRepository buildingRepository;
    private final IResidentService residentService;
    private final IStreetService streetService;
    private final IMetaService metaService;

    @Override
    public BuildingEntrance create(User currentUser, Integer buildingId, Optional<Integer> tenantRepresentativeId, Integer streetId, Integer streetNumber) {
        // Check building
        // TODO: Depend on service, not repo; this is temp solution because of circular dependencies
        Optional<Building> building = buildingRepository.findById(buildingId);
        if (building.isEmpty()) {
            throw new IllegalArgumentException("Building not found");
        }

        // Check street
        Optional<Street> street = streetService.get(streetId);
        if (street.isEmpty()) {
            throw new IllegalArgumentException("Street not found");
        }

        // Get tenant representative
        Optional<Resident> tenantRepresentative;
        if (tenantRepresentativeId.isEmpty()) {
            tenantRepresentative = Optional.empty();
        } else {
            tenantRepresentative = residentService.get(tenantRepresentativeId.get());
        }

        // Create meta
        Meta meta = metaService.create(currentUser, currentUser);

        // Create entrance
        BuildingEntrance buildingEntrance = new BuildingEntrance(
                building.get(),
                tenantRepresentative.orElse(null),
                street.get(),
                streetNumber,
                meta
        );
        return buildingEntranceRepository.save(buildingEntrance);
    }

    @Override
    public void delete(User curentUser, Integer id) {
        BuildingEntrance buildingEntrance = buildingEntranceRepository.findById(id).orElse(null);
        if (buildingEntrance == null) {
            throw new IllegalArgumentException("Building entrance not found");
        }

        Meta meta = metaService.markDeleted(buildingEntrance.getMeta().getId(), curentUser);
        buildingEntrance.setMeta(meta);
        buildingEntranceRepository.save(buildingEntrance);
    }
}
