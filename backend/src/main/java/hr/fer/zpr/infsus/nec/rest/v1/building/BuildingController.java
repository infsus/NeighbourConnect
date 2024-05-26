package hr.fer.zpr.infsus.nec.rest.v1.building;

import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.Person;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingEntranceDetailResponseDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingMasterDetailResponseDTO;
import hr.fer.zpr.infsus.nec.service.v1.building.IBuildingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/v1/buildings")
@RequiredArgsConstructor
public class BuildingController {

    private final IBuildingService buildingService;

    @GetMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<List<BuildingMasterDetailResponseDTO>> getAll() {
        List<Building> buildings = buildingService.getAll();
        return ResponseEntity.ok(buildings.stream().map(building -> new BuildingMasterDetailResponseDTO(
                building.getId(),
                building.getBuildingStartDate(),
                building.getBuildingEndDate(),
                building.getName(),
                building.getBuildingEntrances().stream().map(buildingEntrance -> {
                    Person tenantRepresentative = buildingEntrance.getTenantRepresentative().getUser().getPerson();
                    return new BuildingEntranceDetailResponseDTO(
                            buildingEntrance.getId(),
                            String.format("%s %s", tenantRepresentative.getFirstName(), tenantRepresentative.getLastName()),
                            buildingEntrance.getStreet().getName(),
                            buildingEntrance.getStreetNumber().toString()
                    );
                }).toList()
        )).toList());
    }
}
