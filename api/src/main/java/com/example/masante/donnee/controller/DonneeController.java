package com.example.masante.donnee.controller;


import com.example.masante.compte.entity.Compte;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.donnee.service.DonneeService;
import com.example.masante.donnee.entity.Donnee;
import com.example.masante.enumeration.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class DonneeController {

    @Autowired
    DonneeService donneeService;

    //Ajouter donnee
    @PostMapping(path = "/ajouterDonnee")
    public String AjoutDonnee(@RequestBody Donnee donnee){
        this.donneeService.ajouterDonnee(donnee);
        return "Donnee ajouter avec success";
    }

    //mis a jour (modifier) Donnee
    @PutMapping(path ="/modifierDonnee/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Donnee donnee, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(donneeService.updateDonnee(id, donnee), HttpStatus.OK);
    }

    //Afficher tout les Donnee
    @GetMapping(path = "/allDonnee")
    public List<Donnee> getAllDonnee(){
        return this.donneeService.getAllDonnee();
    }
    //Afficher  Donnee par id
    @GetMapping(path = "/DonneeById/{id}")
    public Donnee getDonneeById(@PathVariable("id") Long id){
        return donneeService.getDonneeById(id);
    }

    //Suprimer une donnee
    @DeleteMapping(path = "/suprimerDonnee/{id}")
    public String suprimeDonnee(Long id){
        this.donneeService.deleteDonnee(id);
        return "Compte suprimer avec succes!!!";
    }

    @PostMapping(path = "/calculDonnee")
    public String CalculDonnee(@RequestBody Donnee donnee){
        return this.donneeService.calcul(donnee);

    }
        /**====================TENSION============================*/
    @PostMapping(path = "/calculTension")
    public String calculTension(@RequestBody Donnee donnee){
        return this.donneeService.calculTension(donnee);

    }

    /**====================DIABETE============================*/

    @PostMapping(path = "/calculDiabete")
    public String CalculDiabete(@RequestBody Donnee donnee){
        return this.donneeService.calculDiabete(donnee);

    }
    /**===========================DERNIER DONNEE==============*/
    @GetMapping(path = "/dernierDonnee")
    public List<Donnee> dernierDonnee(){
        return this.donneeService.dernierDonnee();
    }

    // Donnee de l'utilisateur par Id
    @GetMapping(path = "/donneeByUser/{id}")
    public Donnee donneeByUser(@PathVariable("id")Long id){
       // return this.donneeService.donneeByUser(id);
        return this.donneeService.donneeByUserByData(id);
    }

    //dernier donnee par utilisateur
//    @GetMapping(path = "/dernierDonneeUser/{id}&{userId}" )
//    public Donnee dernierDonneeUser(
//            @PathVariable("id")Long id,
//            @PathVariable("userId")Long userId){
//        return donneeService.dernierDonneeByIdAndUtilisateur(id,userId);
//    }

    // tout les doonnee de l'utilisateur
    @GetMapping(path = "/userDonnee/{id}")
    public List<Donnee> userDonnee(@PathVariable("id")Long id){
        return this.donneeService.userDonnee(id);
    }
}
