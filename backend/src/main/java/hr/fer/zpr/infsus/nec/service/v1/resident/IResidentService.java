package hr.fer.zpr.infsus.nec.service.v1.resident;

import hr.fer.zpr.infsus.nec.domain.v1.Resident;

import java.util.Optional;

public interface IResidentService {

    Optional<Resident> get(Integer id);
}
