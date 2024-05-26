package hr.fer.zpr.infsus.nec.service.v1.meta;

import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;

import java.time.Instant;

public interface IMetaService {

    Meta get(Integer id);

    Meta create(User createdBy, User modifiedBy);

    Meta updateModifier(Integer id, User modifiedBy, Instant modifiedAt);

    Meta updateModifier(Integer id, User modifiedBy);

    Meta markDeleted(Integer id, User modifiedBy);
}
