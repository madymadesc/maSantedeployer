package com.example.masante.compte.entity;

import com.example.masante.contact.entity.Contact;
import com.example.masante.enumeration.Suivie;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@DiscriminatorValue("UTILISATEUR")
public class Utilisateur extends Compte {

    @Enumerated(EnumType.STRING)
    private Suivie suivie;

    @ManyToOne
    private Admin admin;

//    @OneToMany (mappedBy = "utilisateur")
//    private List <Contact> contacts;
}
