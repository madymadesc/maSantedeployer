package com.example.masante.conseil.controller;



import com.example.masante.conseil.entity.Conseil;
import com.example.masante.conseil.service.ConseilService;
import com.example.masante.enumeration.Etat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class ConseilController {

    @Autowired
    ConseilService conseilService;

    //Ajouter conseil
    @PostMapping(path = "/ajouterConseil")
    public Conseil AjoutConseil(Conseil conseil, @RequestParam("file")MultipartFile file) throws IOException {
        return conseilService.ajouterConseil(conseil, file);
    }

    //mis a jour (modifier) Conseil
    @PutMapping(path ="/modifierConseil/{id}" )
    public @ResponseBody
    ResponseEntity<?> modifier(@RequestBody Conseil conseil, @PathVariable(name = "id") Long id){
        return  new ResponseEntity<>(conseilService.updateConseil(id, conseil), HttpStatus.OK);
    }

    //Afficher tout les Conseil
    @GetMapping(path = "/allConseil")
    public List<Conseil> getAllConseil(){
        return this.conseilService.getAllConseil();
    }
    //Afficher  Conseil par id
    @GetMapping(path = "/ConseilById/{id}")
    public Conseil getConseilById(@PathVariable("id") Long id){
        return conseilService.getConseilById(id);
    }

    //Suprimer une Conseil
    @DeleteMapping(path = "/suprimerConseil/{id}")
    public String suprimeConseil(Long id){
        this.conseilService.deleteConseil(id);
        return "Conseil suprimer avec succes!!!";
    }

    //recuperer l'image
    @GetMapping(path = "getImage/{id}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    byte[] findPhoto(@PathVariable("id")Long id) throws IOException{
        return conseilService.getImage(id);
    }

    /**--------------------------------requete personnaliser----------------------------*/


    //recuperer les Conseil dont l'etat est Active
    @GetMapping(path="/conseilActive")
    public List<Conseil>getAllConseilActive(){
        return conseilService.getAllConseilActive();
    }

    //recuperer les specialite dont l'etat est Inactive
    @GetMapping(path = "/conseilInactive")
    public List<Conseil>getAllConseilInactive(){
        return conseilService.getAllConseilInactive();
    }

    //recuperer les specialite par id et par etat, d'on

    //l'etat est Active
    @GetMapping(path = "/conseilActive/{id}")
    public Conseil getConseilActive(@PathVariable("id")Long id){
        return conseilService.getConseilByIdAndEtat(id, Etat.ACTIVE);
    }
    //l'etat est Inactive
    @GetMapping(path = "/conseilInactive/{id}")
    public Conseil getConseilInactive(@PathVariable("id")Long id){
        return conseilService.getConseilByIdAndEtat(id, Etat.INACTIVE);
    }

    //desactiver Specialite
    @PutMapping(path = "/desactiverConseil/{id}")
    public String disableConseil(@PathVariable("id")Long id){
        this.conseilService.disableConseil(id);
        return " Desactiver";
    }

    //activer Specialite
    @PutMapping(path = "/activerConseil/{id}")
    public String enableConseil(@PathVariable("id")Long id){
        this.conseilService.enableConseil(id);
        return "Activer";
    }

}
