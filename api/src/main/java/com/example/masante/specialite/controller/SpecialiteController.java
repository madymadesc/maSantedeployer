package com.example.masante.specialite.controller;


import com.example.masante.enumeration.Etat;
import com.example.masante.specialite.entity.Specialite;
import com.example.masante.specialite.service.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class SpecialiteController {
    @Autowired
    SpecialiteService specialiteService;

    //Ajout specialite
    @PostMapping(path = "/ajouterSpecialite")
    public String ajoutSpecialite(@RequestBody Specialite specialite){
        this.specialiteService.ajouter(specialite);
        return "specialite Ajouter";
    }

    //mis a jour (modifier) specialite
    @PutMapping(path ="/modifierSpecialite/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Specialite specialite, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(specialiteService.updateSpecialite(id, specialite), HttpStatus.OK);
    }


    //Afficher tout specialite
    @GetMapping(path = "/allSpecialite")
    public List<Specialite> getAll(){
        return this.specialiteService.getAllSpecialite();
    }

    // recuperer les specilita par id
    @GetMapping(path = "/specialiteById/{id}")
    public Specialite getspecialiteById(@PathVariable Long id){
        return this.specialiteService.getSpecialiteById(id);
    }


    //Suprimer specialite
    @DeleteMapping(path = "/suprimerSpecialite/{id}")
    public String suprimer(@PathVariable Long id){
        this.specialiteService.deleteSpecialite(id);
        return "specialite suprimer avec succes!!!";
    }



    /**--------------------------------requete personnaliser----------------------------*/


    //recuperer les specialite dont l'etat est Active
    @GetMapping(path="/specialiteActive")
    public List<Specialite>getAllSpecialiteActive(){
        return specialiteService.getAllSpecialiteActive();
    }

    //recuperer les specialite dont l'etat est Inactive
    @GetMapping(path = "/specialiteInactive")
    public List<Specialite>getAllSpecialiteInactive(){
        return specialiteService.getAllSpecialiteInactive();
    }

    //recuperer les specialite par id et par etat, d'on

        //l'etat est Active
        @GetMapping(path = "/specialiteActive/{id}")
        public Specialite getSpecialiteActive(@PathVariable("id")Long id){
            return specialiteService.getSpecialiteByIdAndEtat(id, Etat.ACTIVE);
        }
        //l'etat est Inactive
        @GetMapping(path = "/specialiteInactive/{id}")
        public Specialite getMaladieinactive(@PathVariable("id")Long id){
            return specialiteService.getSpecialiteByIdAndEtat(id, Etat.INACTIVE);
        }

    //desactiver Specialite
    @PutMapping(path = "/desactiverSpecialite/{id}")
    public String disableSpecialite(@PathVariable("id")Long id){
        this.specialiteService.disableSpecialite(id);
        return " Specialite Desactiver";
    }

    //activer Specialite
    @PutMapping(path = "/activerSpecialite/{id}")
    public String enableSpecialite(@PathVariable("id")Long id){
        this.specialiteService.enableSpecialite(id);
        return " Specialite Activer";
    }
}
