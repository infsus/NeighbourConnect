package hr.fer.zpr.infsus.nec.rest.v1.building;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.Person;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingCreateRequestDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingEntranceDetailResponseDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingMasterDetailResponseDTO;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.BuildingSimpleResponseDTO;
import hr.fer.zpr.infsus.nec.service.v1.building.IBuildingService;
import jakarta.annotation.Nonnull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/buildings")
@RequiredArgsConstructor
public class BuildingController {

    private final IBuildingService buildingService;

    @GetMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<BuildingSimpleResponseDTO> get(@PathVariable("id") @Nonnull Integer id) {
        Optional<Building> building = buildingService.get(id);
        if (building.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Building b = building.get();
        return ResponseEntity.ok(new BuildingSimpleResponseDTO(
                b.getId(),
                b.getBuildingStartDate(),
                b.getBuildingEndDate(),
                b.getName()
        ));
    }

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

    @PostMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> create(@RequestBody BuildingCreateRequestDTO buildingData, @AuthenticationPrincipal User currentUser) {
        try {
            Building building = buildingService.create(currentUser, buildingData);
            return ResponseEntity.created(linkTo(methodOn(this.getClass()).get(building.getId())).toUri()).build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
