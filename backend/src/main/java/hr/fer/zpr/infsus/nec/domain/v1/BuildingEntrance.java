package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "building_entrances")
public class BuildingEntrance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"buildingId\"", nullable = false)
    private Building building;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"tenantRepresentativeId\"")
    private Resident tenantRepresentative;

    @NotNull
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"streetId\"", nullable = false)
    private Street street;

    @NotNull
    @Column(name = "\"streetNumber\"", nullable = false)
    private Integer streetNumber;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"metaId\"", nullable = false)
    private Meta meta;

    public BuildingEntrance(Building building, Resident tenantRepresentative, Street street, Integer streetNumber, Meta meta) {
        this.building = building;
        this.tenantRepresentative = tenantRepresentative;
        this.street = street;
        this.streetNumber = streetNumber;
        this.meta = meta;
    }
}