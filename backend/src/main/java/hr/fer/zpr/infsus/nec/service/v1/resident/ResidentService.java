package hr.fer.zpr.infsus.nec.service.v1.resident;

import hr.fer.zpr.infsus.nec.dao.v1.ResidentRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Resident;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ResidentService implements IResidentService {

    private final ResidentRepository residentRepository;

    @Override
    public Optional<Resident> get(Integer id) {
        return residentRepository.findById(id);
    }
}
