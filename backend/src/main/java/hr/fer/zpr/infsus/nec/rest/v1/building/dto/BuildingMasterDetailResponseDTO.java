package hr.fer.zpr.infsus.nec.rest.v1.building.dto;

import java.time.LocalDate;
import java.util.List;

public record BuildingMasterDetailResponseDTO(
        Integer id,
        LocalDate buildingStartDate,
        LocalDate buildingEndDate,
        String name,
        List<BuildingEntranceDetailResponseDTO> entrances
) {}
