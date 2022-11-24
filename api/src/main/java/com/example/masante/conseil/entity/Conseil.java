package com.example.masante.conseil.entity;

import com.example.masante.compte.entity.Admin;
import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Conseil {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String libelle;

    private String image;


    private String description;

    private LocalDateTime date = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVE;

    @ManyToOne
    private Admin admin;


}
