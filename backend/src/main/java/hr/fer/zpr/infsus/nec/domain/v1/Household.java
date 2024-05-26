package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "households")
public class Household {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"buildingEntranceId\"", nullable = false)
    private BuildingEntrance buildingEntrance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"residentId\"")
    private Resident resident;

    @Size(max = 200)
    @Column(name = "comment", length = 200)
    private String comment;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"metaId\"", nullable = false)
    private Meta meta;

}