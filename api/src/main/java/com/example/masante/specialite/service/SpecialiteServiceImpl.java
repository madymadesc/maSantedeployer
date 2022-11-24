package com.example.masante.specialite.service;

import com.example.masante.enumeration.Etat;
import com.example.masante.specialite.entity.Specialite;
import com.example.masante.specialite.repository.SpecialiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecialiteServiceImpl implements SpecialiteService {

    @Autowired
    SpecialiteRepository specialiteRepository;

    //ajouter une specialite
    @Override
    public String ajouter(Specialite specialite) {
        this.specialiteRepository.save(specialite);
        return "ajouter";
    }

    //mis a jour (modifier) Specialite
    @Override
    public Specialite updateSpecialite(Long id, Specialite specialite) {
        return specialiteRepository.save(specialite);
    }

    //Afficher tout specialite
    @Override
    public List<Specialite> getAllSpecialite() {
        return specialiteRepository.findAll();
    }

    // recuperer les specilita par id
    @Override
    public Specialite getSpecialiteById(Long id) {
        return specialiteRepository.findById(id).get();
    }

    //Suprimer specialite
    @Override
    public String deleteSpecialite(Long id) {
        this.specialiteRepository.deleteById(id);
        return "Specialite suprimer de la base de donnee";
    }


    /**--------------------------------requete personnaliser----------------------------*/



    //recuperer  les specialites dont l'etat est Active
    @Override
    public List<Specialite> getAllSpecialiteActive() {
        return specialiteRepository.getAllSpecialiteActive();
    }

    //recuperer les specialites dont l'etat est Inactive
    @Override
    public List<Specialite> getAllSpecialiteInactive() {
        return specialiteRepository.getAllSpecialiteInactive();
    }

    //recuperer les speciqlites par id et par etat
    @Override
    public Specialite getSpecialiteByIdAndEtat(Long id, Etat etat) {
        return specialiteRepository.getSpecialiteByIdAndEtat(id, etat);
    }

    //desactiver une specialite
    @Override
    public String disableSpecialite(Long id) {
        this.specialiteRepository.disableSpecialite(id);
        return "specialite DESACTIVER avec success !!!";
    }

    //activer une specialite
    @Override
    public String enableSpecialite(Long id) {
        this.specialiteRepository.enableSpecialite(id);
        return "specialite ACTIVER avec success !!!";
    }
}