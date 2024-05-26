package hr.fer.zpr.infsus.nec.rest.v1.building.dto;

import java.time.LocalDate;
import java.util.Optional;

public record BuildingUpdateRequestDTO(
        Optional<LocalDate> buildingStartDate,
        Optional<LocalDate> buildingEndDate,
        Optional<String> name
) {}
