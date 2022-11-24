package com.example.masante.maladie.service;

import com.example.masante.maladie.entity.Maladie;
import com.example.masante.enumeration.Etat;


import java.util.List;


public interface MaladieService  {

    String ajouter(Maladie maladie); // methode Creation de maladie
    Maladie updateMaladie (Long id, Maladie maladie);       // methode mise a jour (modifier) maladie
    List<Maladie> getAllMaladie();        // methode afficher tout les maladies
    public Maladie getMaladieById (Long id); // methode pour recuperer les malaidies par id
    public String deleteMaladie(Long id); //Suprimer un maladie de la base

    //---------------------requete personnaliser----------------------------
    List<Maladie>getAllMaladieActive();       //methode recuperer tout les Maladies dont l'etat est Active
    List<Maladie>getAllMaladieInactive();      //methode recuperer tout les Maladies dont l'etat est Inactive
    Maladie getMaladieByIdAndEtat (Long id, Etat etat);       //methode recuperer les Maladie par id et par etat
    String disableMaladie (Long id);     //methode pour desactiver un Maladie
    String enableMaladie (Long id);        //methode pour activer un Maladie

}
