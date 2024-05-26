package hr.fer.zpr.infsus.nec.service.v1.meta;

import hr.fer.zpr.infsus.nec.dao.v1.MetaRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MetaService implements IMetaService {

    private final MetaRepository metaRepository;

    @Override
    public Meta get(Integer id) {
        Optional<Meta> meta = metaRepository.findById(id);
        return meta.orElseThrow(() -> new IllegalArgumentException("Meta not found"));
    }

    @Override
    public Meta create(User createdBy, User modifiedBy) {
        return metaRepository.save(new Meta(createdBy, modifiedBy));
    }

    @Override
    public Meta updateModifier(Integer id, User modifiedBy, Instant modifiedAt) {
        // Get meta
        Meta meta = get(id);

        // Update meta
        meta.setModifiedBy(modifiedBy);
        meta.setModifiedAt(modifiedAt);

        // Save
        return metaRepository.save(meta);
    }

    @Override
    public Meta updateModifier(Integer id, User modifiedBy) {
        return updateModifier(id, modifiedBy, Instant.now());
    }

    @Override
    public Meta markDeleted(Integer id, User modifiedBy) {
        // Get meta
        Meta meta = get(id);

        // Update meta
        meta.setModifiedBy(modifiedBy);
        meta.setModifiedAt(Instant.now());
        meta.setIsDeleted(true);

        // Save
        return metaRepository.save(meta);
    }
}
