package hr.fer.zpr.infsus.nec.service.v1.street;

import hr.fer.zpr.infsus.nec.dao.v1.StreetRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Street;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StreetService implements IStreetService {

    private final StreetRepository streetRepository;

    @Override
    public Optional<Street> get(Integer id) {
        return streetRepository.findById(id);
    }
}
