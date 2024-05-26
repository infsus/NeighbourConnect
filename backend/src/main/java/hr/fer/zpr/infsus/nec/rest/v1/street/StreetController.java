package hr.fer.zpr.infsus.nec.rest.v1.street;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import hr.fer.zpr.infsus.nec.common.dto.PageableResponseDTO;
import hr.fer.zpr.infsus.nec.domain.v1.*;
import hr.fer.zpr.infsus.nec.rest.v1.street.dto.StreetCreateRequestDTO;
import hr.fer.zpr.infsus.nec.rest.v1.street.dto.StreetSimpleResponseDTO;
import hr.fer.zpr.infsus.nec.rest.v1.street.dto.StreetUpdateRequestDTO;
import hr.fer.zpr.infsus.nec.service.v1.street.IStreetService;
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
@RequestMapping("/v1/streets")
@RequiredArgsConstructor
public class StreetController {

    private final IStreetService streetService;

    @GetMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<StreetSimpleResponseDTO> get(@PathVariable("id") @Nonnull Integer id) {
        Optional<Street> street = streetService.get(id);
        if (street.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Street s = street.get();
        return ResponseEntity.ok(new StreetSimpleResponseDTO(
                s.getId(),
                s.getName(),
                s.getPlace().getName()
        ));
    }

    @GetMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<PageableResponseDTO<List<StreetSimpleResponseDTO>>> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Page<Street> streets = streetService.getAll(PageRequest.of(page, size));
        List<StreetSimpleResponseDTO> content = streets.stream().map(street -> new StreetSimpleResponseDTO(
                street.getId(),
                street.getName(),
                street.getPlace().getName())
                ).toList();
        long count = streetService.count();
        return ResponseEntity.ok(new PageableResponseDTO<>(count, content));
    }

    @PostMapping
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> create(@RequestBody StreetCreateRequestDTO streetData, @AuthenticationPrincipal User currentUser) {
        try {
            Street street = streetService.create(currentUser, streetData.placeId(), streetData.name());
            return ResponseEntity.created(linkTo(methodOn(this.getClass()).get(street.getId())).toUri()).build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }

    @PutMapping("/{id}")
    @Secured("ROLE_ADMINISTRATOR")
    public ResponseEntity<?> update(
            @PathVariable("id") Integer id,
            @RequestBody StreetUpdateRequestDTO streetData,
            @AuthenticationPrincipal User currentUser
    ) {
        try {
            Street street = streetService.update(currentUser, id, streetData.placeId().orElse(null), streetData.name().orElse(null));
            return ResponseEntity.ok(new StreetSimpleResponseDTO(
                    street.getId(),
                    street.getName(),
                    street.getPlace().getName()
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
            streetService.delete(currentUser, id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException exception) {
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }
}
