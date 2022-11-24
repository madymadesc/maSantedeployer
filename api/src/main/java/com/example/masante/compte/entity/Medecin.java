package com.example.masante.compte.entity;

import com.example.masante.contact.entity.Contact;
import com.example.masante.enumeration.Specialite;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorValue("MEDECIN")
public class Medecin extends Compte {

    @Enumerated(EnumType.STRING)
    private Specialite specialite;

    @ManyToOne
    private Admin admin;

//    @OneToMany (mappedBy = "medecin")
//    private List <Contact> contacts;
}
