package hr.fer.zpr.infsus.nec.rest.v1.building;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import hr.fer.zpr.infsus.nec.common.dto.PageableResponseDTO;
import hr.fer.zpr.infsus.nec.domain.v1.Building;
import hr.fer.zpr.infsus.nec.domain.v1.Person;
import hr.fer.zpr.infsus.nec.domain.v1.Resident;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.rest.v1.building.dto.*;
import hr.fer.zpr.infsus.nec.service.v1.building.IBuildingService;
import jakarta.annotation.Nonnull;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    public ResponseEntity<PageableResponseDTO<List<BuildingMasterDetailResponseDTO>>> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<Building> buildings = buildingService.getAll(PageRequest.of(page, size));
        List<BuildingMasterDetailResponseDTO> content = buildings.stream().map(building -> new BuildingMasterDetailResponseDTO(
                building.getId(),
                building.getBuildingStartDate(),
                building.getBuildingEndDate(),
                building.getName(),
                building.getBuildingEntrances().stream().map(buildingEntrance -> {
                    Resident resident = buildingEntrance.getTenantRepresentative();
                    Person person = resident == null ? null : resident.getUser().getPerson();
                    String firstName = person == null ? "" : person.getFirstName();
                    String lastName = person == null ? "" : person.getLastName();
                    return new BuildingEntranceDetailResponseDTO(
                            buildingEntrance.getId(),
                            String.format("%s %s", firstName, lastName),
                            buildingEntrance.getStreet().getName(),
                            buildingEntrance.getStreetNumber().toString()
                    );
                }).toList()
        )).toList();
        long count = buildingService.count();
        return ResponseEntity.ok(new PageableResponseDTO<>(count, content));
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

    @PutMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> update(
            @PathVariable("id") Integer id,
            @RequestBody BuildingUpdateRequestDTO buildingData,
            @AuthenticationPrincipal User currentUser
    ) {
        try {
            Building building = buildingService.update(currentUser, id, buildingData);
            return ResponseEntity.ok(new BuildingSimpleResponseDTO(
                    building.getId(),
                    building.getBuildingStartDate(),
                    building.getBuildingEndDate(),
                    building.getName()
            ));
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> delete(
            @PathVariable("id") Integer id,
            @AuthenticationPrincipal User currentUser
    ) {
        try {
            buildingService.delete(currentUser, id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
