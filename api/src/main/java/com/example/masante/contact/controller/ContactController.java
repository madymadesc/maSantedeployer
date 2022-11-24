package com.example.masante.contact.controller;

import com.example.masante.contact.entity.Contact;
import com.example.masante.contact.service.ContactService;
import com.example.masante.enumeration.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class ContactController {

    @Autowired
    ContactService contactService;

    //Ajout Contact
    @PostMapping(path = "/ajouterContact")
    public String ajoutContact(@RequestBody Contact contact){
       this.contactService.ajouterContact(contact);
        return "Contact Ajouter";
    }

    //Modifier contact
    @PutMapping(path = "/modifierContact/{id}")
    public @ResponseBody
    ResponseEntity<?> modifierContact(@RequestBody Contact contact, @PathVariable(name="id") Long id){
        return new ResponseEntity<>(contactService.updateContact(id, contact), HttpStatus.OK);
    }

    //Afficher tout les contact
    @GetMapping(path = "/allContact")
    public List<Contact> getAllContact(){ return this.contactService.getAllContact(); }

    // Recuper contact by id
    @GetMapping(path = "/contactById/{id}")
    public Contact getContactById(@PathVariable Long id){ return this.contactService.getContactById(id); }

    // suprimer contact dans la base
    @DeleteMapping(path = "/suprimerContact/{id}")
    public String suprimer(@PathVariable Long id){
        this.contactService.deleteContact(id);
        return "suprimer";
    }


    /**--------------------------------requete personnaliser----------------------------*/


    //recuperer les contact dont l'etat est Active
    @GetMapping(path="/contactActive")
    public List<Contact>getAllContactActive(){
        return contactService.getAllContactActive();
    }

    //recuperer les Contact dont l'etat est Inactive
    @GetMapping(path = "/ContactInactive")
    public List<Contact>getAllContactInactive(){
        return this.contactService.getAllContactInactive();
    }

    //recuperer les Contact par id et par etat, d'on

    //l'etat est Active
    @GetMapping(path = "/contactActive/{id}")
    public Contact getContactActive(@PathVariable("id")Long id){
        return contactService.getContactByIdAndEtat(id, Etat.ACTIVE);
    }
    //l'etat est Inactive
    @GetMapping(path = "/contactInactive/{id}")
    public Contact getContactinactive(@PathVariable("id")Long id){
        return contactService.getContactByIdAndEtat(id, Etat.INACTIVE);
    }

    //desactiver Contact
    @PutMapping(path = "/desactiverContact/{id}")
    public String disableContact(@PathVariable("id")Long id){
        this.contactService.disableContact(id);
        return " Contact Desactiver";
    }

    //activer Contact
    @PutMapping(path = "/activerContact/{id}")
    public String enableContact(@PathVariable("id")Long id){
        this.contactService.enableContact(id);
        return " Contact Activer";
    }

    // tout les Contact de l'utilisateur
    @GetMapping(path = "/userContact/{id}")
    public List<Contact> userContact(@PathVariable("id")Long id){
        return this.contactService.userContact(id);
    }

    // tout les Contact de medecin
    @GetMapping(path = "/medecinContact/{id}")
    public List<Contact> medecinContact(@PathVariable("id")Long id){
        return this.contactService.medecinContact(id);
    }
}
