package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "buildings")
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @NotNull
    @Column(name = "\"buildingStartDate\"", nullable = false)
    private LocalDate buildingStartDate;

    @NotNull
    @Column(name = "\"buildingEndDate\"", nullable = false)
    private LocalDate buildingEndDate;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"metaId\"", nullable = false)
    private Meta meta;

    @Size(max = 50)
    @NotNull
    @Column(name = "name", nullable = false, length = 50)
    private String name;

    @OneToMany(mappedBy = "building")
    private Set<BuildingEntrance> buildingEntrances = new LinkedHashSet<>();

    public Building(LocalDate buildingStartDate, LocalDate buildingEndDate, Meta meta, String name) {
        this.buildingStartDate = buildingStartDate;
        this.buildingEndDate = buildingEndDate;
        this.meta = meta;
        this.name = name;
    }
}