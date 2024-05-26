package hr.fer.zpr.infsus.nec.service.v1.street;

import hr.fer.zpr.infsus.nec.domain.v1.Place;
import hr.fer.zpr.infsus.nec.domain.v1.Street;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IStreetService {

    Optional<Street> get(Integer id);

    Page<Street> getAll(Pageable pageable);

    Street create(User currentUser, Integer placeId, String name);

    Street update(User currentUser, Integer id, Integer placeId, String name);

    void delete(User currentUser, Integer id);

    long count();
}
