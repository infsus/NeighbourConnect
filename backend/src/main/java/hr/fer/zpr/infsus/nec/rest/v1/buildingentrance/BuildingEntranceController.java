package hr.fer.zpr.infsus.nec.rest.v1.buildingentrance;

import hr.fer.zpr.infsus.nec.domain.v1.User;
import hr.fer.zpr.infsus.nec.service.v1.buildingentrance.IBuildingEntranceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/building-entrances")
@RequiredArgsConstructor
public class BuildingEntranceController {

    private final IBuildingEntranceService buildingEntranceService;

    @DeleteMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> delete(
            @PathVariable("id") Integer id,
            @AuthenticationPrincipal User currentUser
    ) {
        try {
            buildingEntranceService.delete(currentUser, id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
