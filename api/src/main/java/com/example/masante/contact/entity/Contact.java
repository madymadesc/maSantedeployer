package com.example.masante.contact.entity;

import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
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
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    @Column
    private String mobile;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.ACTIVE;

    @ManyToOne
    private Medecin medecin;

    @ManyToOne
    private Utilisateur utilisateur;

}

