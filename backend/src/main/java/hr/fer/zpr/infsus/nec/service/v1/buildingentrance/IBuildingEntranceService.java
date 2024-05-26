package hr.fer.zpr.infsus.nec.service.v1.buildingentrance;

import hr.fer.zpr.infsus.nec.domain.v1.BuildingEntrance;
import hr.fer.zpr.infsus.nec.domain.v1.User;

import java.util.Optional;

public interface IBuildingEntranceService {

    BuildingEntrance create(
            User currentUser,
            Integer buildingId,
            Optional<Integer> tenantRepresentativeId,
            Integer streetId,
            Integer streetNumber
    );
}
