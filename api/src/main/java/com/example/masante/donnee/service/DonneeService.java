package com.example.masante.donnee.service;



import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.donnee.entity.Donnee;


import java.util.List;

public interface DonneeService {
    String ajouterDonnee (Donnee donnee);     // Ajout de donnee
    Donnee updateDonnee (Long id, Donnee donnee);       // methode mise a jour (modifier) donnee
    List<Donnee> getAllDonnee();        // methode afficher tout les donnee
    public Donnee getDonneeById (Long id); // methode afficher donnee par id
    public String deleteDonnee(Long id); //Suprimer un donnee dans la base

    String calcul(Donnee donnee);

    String calculTension(Donnee donnee);
    String calculDiabete(Donnee donnee);

/**------------requt person------------------*/

    List <Donnee> dernierDonnee(); // Dernier doonnee dans la base
    List <Donnee> donneeByUser(Long id);  // Donnee de l'utilisateur par Id

    Donnee donneeByUserByData(Long id);


//    Donnee dernierDonneeByIdAndUtilisateur(Long id, Utilisateur utilisateur);       //methode recuperer les donnees par id et par utilisateurs

    List <Donnee> userDonnee(long id);


}
