package com.example.masante.maladie.entity;

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
public class Maladie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String description;

    @Column(nullable = false)
    private String libelle;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVE;

    @ManyToOne
    private Admin admin;
}
