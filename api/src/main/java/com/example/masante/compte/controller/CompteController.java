package com.example.masante.compte.controller;

import com.example.masante.compte.entity.Admin;
import com.example.masante.compte.entity.Compte;
import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import com.example.masante.compte.service.CompteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/masante/api/test")
@CrossOrigin("*")
public class CompteController {
    @Autowired
    CompteService compteService;

    //Creer un compte
    @PostMapping(path = "/creer")
    public String creerCompte(@RequestBody Compte compte){
        this.compteService.CreerCompte(compte);
        return "compte creer avec success";
    }

    //Creer un compte Medecin
    @PostMapping(path = "/creerMedecin")
    public Compte creerCompteMedecin(@RequestBody Medecin medecin){
        return this.compteService.creerMedecin(medecin);
    }
    //Creer un compte Utilisateur
    @PostMapping(path = "/creerUtilisateur")
    public Compte creerCompteUtilisateur(@RequestBody Utilisateur utilisateur){
        return this.compteService.creerUser(utilisateur);
    }

    //mis a jour (modifier) compte
    @PutMapping(path ="/modifier/{id}" )
    public @ResponseBody ResponseEntity<?> modifier(@RequestBody Compte compte,@PathVariable(name = "id") Long id){
        System.out.println(id);
        return  new ResponseEntity<>(compteService.updateCompte(id, compte), HttpStatus.OK);
    }

    //Afficher tout les compte
    @GetMapping(path = "/tout")
    public List<Compte> getAllCompte(){
        return this.compteService.getAllCompte();
    }

    // Recuperer les compte par id
    @GetMapping(path = "/compte/{id}")
    public Compte getCompteById(@PathVariable Long id){
        return this.compteService.getCompteById(id);
    }


    //Suprimer un compte
    @DeleteMapping(path = "/suprimer/{id}")
    public String suprimeCompte(Long id){
        this.compteService.deleteCompte(id);
        return "Compte suprimer avec succes!!!";
    }

    //Modifier mot de passe
    @PutMapping(path = "modifierMotDePasse/{id}")
    public String modifierMotDePasse(@RequestBody Compte compte,@PathVariable Long id){
        System.out.println("modifier ");
        this.compteService.modifierMotDePasse(id, compte);
        return "Mot de passse changer avec succes";
    }


    //Choix du suivie DIABETE
    @PutMapping(path = "/suivieDIABETE/{id}")
    public String suivieChoixDiabete(@PathVariable("id")Long id){
        this.compteService.suivieChoixDiabete(id);
        return "Choix effectue";
    }

    //Choix du suivie TENSION
    @PutMapping(path = "/suivieTENSION/{id}")
    public String suivieChoixTension(@PathVariable("id")Long id){
        this.compteService.suivieChoixTension(id);
        return "Choix effectue";
    }

    //-----------------------------requete personnaliser----------------------------


    //connexion au compte
    @ResponseBody
    @GetMapping( "/connexion/{mobile}&{motDePasse}")
    public Compte connexion(
            @PathVariable("mobile") String mobile,
            @PathVariable("motDePasse") String motDePasse){
        return this.compteService.connexion(mobile, motDePasse);
    }

    //connexion au compte email
    @ResponseBody
    @GetMapping( "/connexionEmail/{email}&{motDePasse}")
    public Compte connexionEmail(
            @PathVariable("email") String email,
            @PathVariable("motDePasse") String motDePasse){
        return this.compteService.connexionEmail(email, motDePasse);
    }


    //connexion au compte Admin
    @ResponseBody
    @GetMapping( "/connexionAdmin/{mobile}&{motDePasse}")
    public Admin logIn(
            @PathVariable("mobile") String mobile,
            @PathVariable("motDePasse") String motDePasse){
        return this.compteService.logIn(mobile,motDePasse);
    }

    //connexion au compte Admin email
    @ResponseBody
    @GetMapping( "/connexionAdminEmail/{email}&{motDePasse}")
    public Admin logInEmail(
            @PathVariable("email") String email,
            @PathVariable("motDePasse") String motDePasse){
        return this.compteService.logInEmail(email, motDePasse);
    }

    //recuperer tout les comptes dont l'etat est Active
    @GetMapping(path="/compteActive")
    public List<Compte>getAllCompteActive(){
        return compteService.getAllCompteActive();
    }

    //recuperer tout les comptes dont l'etat est Inactive
    @GetMapping(path = "/compteInactive")
    public List<Compte>getAllCompteInactive(){
        return compteService.getAllCompteInactive();
    }

    //recuperer les comptes par id et par etat, d'on

        //l'etat est Active
        @GetMapping(path = "/compteActive/{id}")
        public Compte getCompteActive(@PathVariable("id")Long id){
            return compteService.getCompteByIdAndEtat(id, Etat.ACTIVE);
        }
        //l'etat est Inactive
        @GetMapping(path = "/compteInactive/{id}")
        public Compte getCompteinactive(@PathVariable("id")Long id){
            return compteService.getCompteByIdAndEtat(id, Etat.INACTIVE);
        }

    //desactiver un compte
    @PutMapping(path = "/desactiverCompte/{id}")
    public String disableCompte(@PathVariable("id")Long id){
        this.compteService.disableCompte(id);
        return "Desactiver";
    }

    //activer un compte
    @PutMapping(path = "/activerCompte/{id}")
    public String enableCompte(@PathVariable("id")Long id){
        this.compteService.enableCompte(id);
        return "Activer";
    }


    /**-----------Medecin---------------*/

    //Afficher tout les Medecins
    @GetMapping(path = "/medecin")
    public List<Medecin> getAllMedecin(){
        return this.compteService.getAllMedecin();
    }

    //recuperer tout les Medecins dont l'etat est Active
    @GetMapping(path="/medecinActive")
    public List<Medecin>getAllMedecinActive(){
        return compteService.getAllMedecinActive();
    }

    //recuperer tout les Medecins dont l'etat est Inactive
    @GetMapping(path="/medecinInactive")
    public List<Medecin>getAllMedecinInactive(){
        return compteService.getAllMedecinInactive();
    }

    //recuperer les Medecins par id d'on

        //l'etat est Active
        @GetMapping(path = "/medecinActive/{id}")
        public Medecin getMedecinActive(@PathVariable("id")Long id){
            return compteService.getMedecinByIdAndEtat(id,Etat.ACTIVE);
        }

        //l'etat est Inactive
        @GetMapping(path = "/medecinInactive/{id}")
        public Medecin getMedecinInactive(@PathVariable("id")Long id){
            return compteService.getMedecinByIdAndEtat(id,Etat.INACTIVE);
        }

    /**-----------Utilisateur---------------*/

    //Afficher tout les Utilisateurs
    @GetMapping(path = "/utilisateur")
    public List<Utilisateur> getAllUtilisateur(){
        return this.compteService.getAllUtilisateur();
    }

    //recuperer tout les Utilisateur dont l'etat est Active
    @GetMapping(path="/utilisateurActive")
    public List<Utilisateur>getAllUtilisateurActive(){
        return compteService.getAllUtilisateurActive();
    }

    //recuperer tout les Utilisateur dont l'etat est Inactive
    @GetMapping(path="/utilisateurInactive")
    public List<Utilisateur>getAllUtilisateurInactive(){
        return compteService.getAllUtilisateurInactive();
    }

    //recuperer les Utilisateur par id d'on

        //l'etat est Active
        @GetMapping(path = "/utilisateurActive/{id}")
        public Utilisateur getUtilisateurActive(@PathVariable("id")Long id){
            return compteService.getUtilisateurByIdAndEtat(id,Etat.ACTIVE);
        }

        //l'etat est Inactive
        @GetMapping(path = "/utilisateurInactive/{id}")
        public Utilisateur getUtilisateurInactive(@PathVariable("id")Long id){
            return compteService.getUtilisateurByIdAndEtat(id,Etat.INACTIVE);
        }

}
