package com.example.masante.contact.repository;

import com.example.masante.contact.entity.Contact;
import com.example.masante.enumeration.Etat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository <Contact, Long> {

    @Query(value = "SELECT contact FROM Contact contact WHERE contact.etat = 'ACTIVE'")
    List<Contact> getAllContactActive();

    @Query( value = "SELECT contact FROM Contact contact WHERE contact.etat = 'INACTIVE'")
    List<Contact>getAllContactInactive();

    @Query(value ="SELECT contact FROM Contact  contact WHERE contact.id = :id AND contact.etat =:etat")
    Contact getContactByIdAndEtat(Long id, Etat etat);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Contact SET etat='INACTIVE' WHERE id=:id")
    Void disableContact(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Contact SET etat='ACTIVE' WHERE id=:id")
    Void enableContact(Long id);

    // Contact de l'utilisateur
    @Query("SELECT user FROM Contact user WHERE user.utilisateur.id =:id")
    List <Contact> userContact(long id);

    // Contact de Medecin
    @Query("SELECT medec FROM Contact medec WHERE medec.medecin.id =:id")
    List <Contact> medecinContact(long id);
}
