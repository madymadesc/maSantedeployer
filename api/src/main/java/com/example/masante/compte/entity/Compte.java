package com.example.masante.compte.entity;

import com.example.masante.enumeration.Etat;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE", discriminatorType = DiscriminatorType.STRING )
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME,include = JsonTypeInfo.As.PROPERTY, property = "Type")
@JsonSubTypes(
        {
                @JsonSubTypes.Type(name = "ADMIN", value = Admin.class),
                @JsonSubTypes.Type(name = "MEDECIN", value = Medecin.class),
                @JsonSubTypes.Type(name = "UTILISATEUR", value = Utilisateur.class)

        }
)

public abstract class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomComplet;

    @Column(nullable = false)
    private String adresse;

    @Column(nullable = false, unique = true)
    private String mobile;

    @Column(nullable = false, unique = true)
    private String email;

    @Column
    private int age;

    @Column
    private LocalDate dateDeNaissance;

    @Column(nullable = false)
    private String motDePasse;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVE;
}
