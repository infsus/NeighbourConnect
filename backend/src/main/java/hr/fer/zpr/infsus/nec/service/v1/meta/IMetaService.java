package hr.fer.zpr.infsus.nec.service.v1.meta;

import hr.fer.zpr.infsus.nec.domain.v1.Meta;
import hr.fer.zpr.infsus.nec.domain.v1.User;

public interface IMetaService {

    Meta create(User createdBy, User modifiedBy);
}
