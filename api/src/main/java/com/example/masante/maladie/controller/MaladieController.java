package com.example.masante.maladie.controller;

import com.example.masante.maladie.service.MaladieService;
import com.example.masante.maladie.entity.Maladie;
import com.example.masante.enumeration.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class MaladieController {

    @Autowired
    MaladieService maladieService;

    //Ajout maladie
    @PostMapping(path = "/ajouterMaladie")
    public String ajoutMaladie(@RequestBody Maladie maladie){
        this.maladieService.ajouter(maladie);
        return "Maladie Ajouter";
    }

    //mis a jour (modifier) maladie
    @PutMapping(path ="/modifierMaladie/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Maladie maladie, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(maladieService.updateMaladie(id, maladie), HttpStatus.OK);
    }


    //Afficher tout Maladie
    @GetMapping(path = "/allMaladies")
    public List<Maladie> getAll(){
        return this.maladieService.getAllMaladie();
    }


    // methode pour recuperer les malaidies par id
    @GetMapping(path = "/maladieById/{id}")
    public Maladie getMaladieById(@PathVariable Long id){
        return this.maladieService.getMaladieById(id);
    }

    //Suprimer maladie
    @DeleteMapping(path = "/suprimerMaladie/{id}")
    public String suprimer(@PathVariable Long id){
        this.maladieService.deleteMaladie(id);
        return "Maladie suprimer avec succes!!!";
    }



/**--------------------------------requete personnaliser----------------------------*/


    //recuperer les maladies dont l'etat est Active
    @GetMapping(path="/maladieActive")
    public List<Maladie>getAllMaladieActive(){
        return maladieService.getAllMaladieActive();
    }

    //recuperer les maladies dont l'etat est Inactive
    @GetMapping(path = "/maladieInactive")
    public List<Maladie>getAllMaladieInactive(){
        return maladieService.getAllMaladieInactive();
    }

    //recuperer les maladies par id et par etat, d'on

    //l'etat est Active
    @GetMapping(path = "/maladieActive/{id}")
    public Maladie getMaladieActive(@PathVariable("id")Long id){
        return maladieService.getMaladieByIdAndEtat(id, Etat.ACTIVE);
    }
    //l'etat est Inactive
    @GetMapping(path = "/maladieInactive/{id}")
    public Maladie getMaladieinactive(@PathVariable("id")Long id){
        return maladieService.getMaladieByIdAndEtat(id, Etat.INACTIVE);
    }

    //desactiver maladie
    @PutMapping(path = "/desactiverMaladie/{id}")
    public String disableMaladie(@PathVariable("id")Long id){
        this.maladieService.disableMaladie(id);
        return " Maladie Desactiver";
    }

    //activer Maladie
    @PutMapping(path = "/activerMaladie/{id}")
    public String enableMaladie(@PathVariable("id")Long id){
        this.maladieService.enableMaladie(id);
        return " Maladie Activer";
    }



}
