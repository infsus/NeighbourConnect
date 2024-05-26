package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "meta")
public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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

}