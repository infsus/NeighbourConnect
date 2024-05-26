package hr.fer.zpr.infsus.nec.service.v1.street;

import hr.fer.zpr.infsus.nec.domain.v1.Street;

import java.util.Optional;

public interface IStreetService {

    Optional<Street> get(Integer id);
}
