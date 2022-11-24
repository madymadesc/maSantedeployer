package com.example.masante.contact.service;

import com.example.masante.contact.entity.Contact;
import com.example.masante.contact.repository.ContactRepository;
import com.example.masante.enumeration.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ContactServiceImpl implements ContactService{

    @Autowired
    ContactRepository contactRepository;

    //Ajouter Contact
    @Override
    public String ajouterContact(Contact contact) {
        this.contactRepository.save(contact);
        return "Ajouter";
    }

    //Modifier Contact
    @Override
    public Contact updateContact(Long id, Contact contact) {
        return contactRepository.save(contact);
    }

    //Afficher tout les contact
    @Override
    public List<Contact> getAllContact() {
        return contactRepository.findAll();
    }

    // Recupere par id
    @Override
    public Contact getContactById(Long id) {
        return contactRepository.findById(id).get();
    }

    //Suprimer dans la base
    @Override
    public String deleteContact(Long id) {
        this.contactRepository.deleteById(id);
        return "Suprimer";
    }

    /**---------------------requete personnaliser----------------------------*/

    //recuperer  les Contact dont l'etat est Active
    @Override
    public List<Contact> getAllContactActive() {
        return contactRepository.getAllContactActive();
    }

    //recuperer  les contact dont l'etat est Inactive
    @Override
    public List<Contact> getAllContactInactive() {
        return contactRepository.getAllContactInactive();
    }

    //recuperer les Contact par id et par etat
    @Override
    public Contact getContactByIdAndEtat(Long id, Etat etat) {
        return contactRepository.getContactByIdAndEtat(id, etat);
    }

    //desactiver un Contact
    @Override
    public String disableContact(Long id) {
        this.contactRepository.disableContact(id);
        return "Desactiver";
    }

    //Activer un Contact
    @Override
    public String enableContact(Long id) {
        this.contactRepository.enableContact(id);
        return "Activer";
    }

    /**==================== contact==================*/
    @Override
    public List<Contact> userContact(Long id) {
        return contactRepository.userContact(id);
    }

    @Override
    public List<Contact> medecinContact(Long id) {
        return contactRepository.medecinContact(id);
    }


}
