package hr.fer.zpr.infsus.nec.service.v1.building;

import hr.fer.zpr.infsus.nec.dao.v1.BuildingRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Building;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BuildingService implements IBuildingService {

    private final BuildingRepository buildingRepository;

    @Override
    public List<Building> getAll() {
        return buildingRepository.findAll();
    }
}
