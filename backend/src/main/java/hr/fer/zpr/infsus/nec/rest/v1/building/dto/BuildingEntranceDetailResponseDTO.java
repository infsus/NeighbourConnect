package hr.fer.zpr.infsus.nec.rest.v1.building.dto;

public record BuildingEntranceDetailResponseDTO (
        Integer id,
        String tenantRepresentative,
        String streetName,
        String streetNumber
) {}
