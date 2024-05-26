package hr.fer.zpr.infsus.nec.service.v1.street;

import hr.fer.zpr.infsus.nec.dao.v1.PlaceRepository;
import hr.fer.zpr.infsus.nec.dao.v1.StreetRepository;
import hr.fer.zpr.infsus.nec.domain.v1.*;
import hr.fer.zpr.infsus.nec.service.v1.meta.IMetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StreetService implements IStreetService {

    private final StreetRepository streetRepository;
    private final PlaceRepository placeRepository;
    private final IMetaService metaService;

    @Override
    public Optional<Street> get(Integer id) {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);
        Street probe = new Street();
        probe.setId(id);
        probe.setMeta(metaProbe);

        Example<Street> example = Example.of(probe);

        return streetRepository.findOne(example);
    }

    @Override
    public Page<Street> getAll(Pageable pageable) {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);

        Street probe = new Street();
        probe.setMeta(metaProbe);

        Example<Street> example = Example.of(probe);

        return streetRepository.findAll(example, pageable);
    }

    @Override
    public Street create(User currentUser, Integer placeId, String name) {
        Place place = placeRepository.findById(placeId).orElse(null);
        if (place == null) {
            throw new IllegalArgumentException("Place not found");
        }

        Meta meta = metaService.create(currentUser, currentUser);

        Street street = new Street(place, name, meta);
        return streetRepository.save(street);
    }

    @Override
    public Street update(User currentUser, Integer id, Integer placeId, String name) {
        Street street = get(id).orElse(null);
        if (street == null) {
            throw new IllegalArgumentException("Street not found");
        }

        if (placeId != null) {
            Place place = placeRepository.findById(placeId).orElse(null);
            if (place == null) {
                throw new IllegalArgumentException("Place not found");
            }
            street.setPlace(place);
        }

        if (name != null) {
            street.setName(name);
        }

        Meta meta = metaService.updateModifier(street.getMeta().getId(), currentUser);
        street.setMeta(meta);

        return streetRepository.save(street);
    }

    @Override
    public void delete(User currentUser, Integer id) {
        Street street = get(id).orElse(null);
        if (street == null) {
            throw new IllegalArgumentException("Street not found");
        }

        Meta meta = metaService.markDeleted(street.getMeta().getId(), currentUser);
        street.setMeta(meta);
        streetRepository.save(street);
    }

    @Override
    public long count() {
        Meta metaProbe = new Meta();
        metaProbe.setIsDeleted(false);
        Street probe = new Street();
        probe.setMeta(metaProbe);

        Example<Street> example = Example.of(probe);

        return streetRepository.count(example);
    }
}
