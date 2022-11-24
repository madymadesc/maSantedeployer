package com.example.masante.contact.service;
import com.example.masante.contact.entity.Contact;
import com.example.masante.enumeration.Etat;


import java.util.List;

public interface ContactService {


    String ajouterContact (Contact contact);     // Ajout de Contact
    Contact updateContact (Long id, Contact contact);       // methode mise a jour (modifier) Contact
    List<Contact> getAllContact();        // methode afficher tout les Contact
    public Contact getContactById (Long id); // methode afficher Contact par id
    public String deleteContact(Long id); //Suprimer un Contact dans la base

    /**---------------------requete personnaliser----------------------------*/

    List<Contact>getAllContactActive();       //methode recuperer tout les Contact dont l'etat est Active
    List<Contact>getAllContactInactive();      //methode recuperer tout les Contact dont l'etat est Inactive
    Contact getContactByIdAndEtat (Long id, Etat etat);       //methode recuperer les Contact par id et par etat
    String disableContact (Long id);     //methode pour desactiver une Contact
    String enableContact (Long id);        //methode pour activer une Contact

/**==================== contact==================*/
    List <Contact> userContact(Long id);
    List <Contact> medecinContact(Long id);
}
