package hr.fer.zpr.infsus.nec.rest.v1.street.dto;

import java.util.Optional;

public record StreetUpdateRequestDTO(Optional<String> name, Optional<Integer> placeId) {
}
