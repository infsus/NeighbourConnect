package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "meta", schema = "public")
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"createdById\"", nullable = false)
    private User createdBy;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"modifiedById\"", nullable = false)
    private User modifiedBy;

    @NotNull
    @Column(name = "\"createdAt\"", nullable = false)
    private Instant createdAt;

    @NotNull
    @Column(name = "\"modifiedAt\"", nullable = false)
    private Instant modifiedAt;

    @NotNull
    @Column(name = "\"isDeleted\"", nullable = false)
    private Boolean isDeleted = false;

    public Meta(User createdBy, User modifiedBy) {
        this(createdBy, modifiedBy, Instant.now(), Instant.now(), false);
    }

    public Meta(User createdBy, User modifiedBy, Instant createdAt, Instant modifiedAt, Boolean isDeleted) {
        this.createdBy = createdBy;
        this.modifiedBy = modifiedBy;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.isDeleted = isDeleted;
    }
}