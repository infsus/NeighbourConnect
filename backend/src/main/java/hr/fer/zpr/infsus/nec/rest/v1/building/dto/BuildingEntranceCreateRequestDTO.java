package hr.fer.zpr.infsus.nec.rest.v1.building.dto;

import java.util.Optional;

public record BuildingEntranceCreateRequestDTO(
        Optional<Integer> tenantRepresentativeId,
        Integer streetId,
        Integer streetNumber
) {}
