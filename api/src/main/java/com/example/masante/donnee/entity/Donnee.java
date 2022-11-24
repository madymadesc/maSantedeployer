package com.example.masante.donnee.entity;

import com.example.masante.maladie.entity.Maladie;
import com.example.masante.compte.entity.Utilisateur;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Donnee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Integer valeurA;

    @Column
    private Integer valeurB;

    @Column
    private Float valeurC;

    @Column
    private Integer unite;

    @Column
    private LocalDateTime date = LocalDateTime.now();

    @Column
    String maladies;

    @Column
    private String resultat;

    @Column
    private int couleur;

    @ManyToOne
    private Maladie maladie;


    @ManyToOne
    private Utilisateur utilisateur;

}
