package hr.fer.zpr.infsus.nec.service.v1.meta;

import hr.fer.zpr.infsus.nec.dao.v1.MetaRepository;
import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MetaService implements IMetaService {

    private final MetaRepository metaRepository;

    @Override
    public Meta create(User createdBy, User modifiedBy) {
        return metaRepository.save(new Meta(createdBy, modifiedBy));
    }
}
