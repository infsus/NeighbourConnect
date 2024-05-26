package hr.fer.zpr.infsus.nec.domain.v1;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "persons")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Size(max = 50)
    @NotNull
    @Column(name = "\"firstName\"", nullable = false, length = 50)
    private String firstName;

    @Size(max = 50)
    @NotNull
    @Column(name = "\"lastName\"", nullable = false, length = 50)
    private String lastName;

    @Size(max = 11)
    @Column(name = "pid", length = 11)
    private String pid;

    @Column(name = "\"dateOfBirth\"")
    private LocalDate dateOfBirth;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"placeOfBirthId\"")
    private Place placeOfBirth;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "\"placeOfResidenceId\"")
    private Place placeOfResidence;

    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "\"metaId\"", nullable = false)
    private Meta meta;

}