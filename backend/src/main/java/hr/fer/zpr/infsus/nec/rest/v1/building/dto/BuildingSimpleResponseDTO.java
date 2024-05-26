package hr.fer.zpr.infsus.nec.rest.v1.building.dto;

import java.time.LocalDate;

public record BuildingSimpleResponseDTO(
        Integer id,
        LocalDate buildingStartDate,
        LocalDate buildingEndDate,
        String name
) {}
