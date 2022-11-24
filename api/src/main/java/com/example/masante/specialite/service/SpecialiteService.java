package com.example.masante.specialite.service;

import com.example.masante.enumeration.Etat;
import com.example.masante.specialite.entity.Specialite;

import java.util.List;

public interface SpecialiteService {
    String ajouter(Specialite specialite); // methode Creation de Specialite
    Specialite updateSpecialite (Long id, Specialite specialite);       // methode mise a jour (modifier) Specialite
    List<Specialite> getAllSpecialite();        // methode afficher tout les Specialite
    public Specialite getSpecialiteById (Long id); // methode pour recuperer les specilita par id
    public String deleteSpecialite(Long id); //Suprimer une Specialite de la base

    //---------------------requete personnaliser----------------------------
    List<Specialite>getAllSpecialiteActive();       //methode recuperer tout les Specialite dont l'etat est Active
    List<Specialite>getAllSpecialiteInactive();      //methode recuperer tout les Specialite dont l'etat est Inactive
    Specialite getSpecialiteByIdAndEtat (Long id, Etat etat);       //methode recuperer les Specialite par id et par etat
    String disableSpecialite (Long id);     //methode pour desactiver une Specialite
    String enableSpecialite (Long id);        //methode pour activer une Specialite
}
