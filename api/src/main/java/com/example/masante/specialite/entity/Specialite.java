package com.example.masante.specialite.entity;

import com.example.masante.compte.entity.Admin;
import com.example.masante.enumeration.Etat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Specialite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String libelle;

    @Column
    private String description;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVE;

    @ManyToOne
    private Admin admin;

}
