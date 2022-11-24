package com.example.masante.compte.service;

import com.example.masante.compte.entity.Admin;
import com.example.masante.compte.entity.Compte;
import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import com.example.masante.compte.repository.CompteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CompteServiceImpl implements CompteService{
    @Autowired
    CompteRepository compteRepository;

    //Creer un compte
    @Override
    public String CreerCompte(Compte compte) {

        LocalDate maintenant = LocalDate.now();
        int ageA = maintenant.getYear() - compte.getDateDeNaissance().getYear();
        if ((compte.getDateDeNaissance().getMonthValue() > maintenant.getMonthValue()
                || (compte.getDateDeNaissance().getMonthValue() == maintenant.getMonthValue())
                && (compte.getDateDeNaissance().getDayOfMonth() > maintenant.getDayOfMonth())))
        {
            ageA--;
        }
        compte.setAge(ageA);
        this.compteRepository.save(compte);
        return compte.toString();

    }

    //Creer un compte medecin
    @Override
    public Compte creerMedecin(Medecin medecin) {
        return this.compteRepository.save(medecin);
    }

    //Creer un compte User
    @Override
    public Compte creerUser(Utilisateur utilisateur) {
        return this.compteRepository.save(utilisateur);

    }

    //mis a jour (modifier) compte
    @Override
    public Compte updateCompte(Long id, Compte compte) {
        LocalDate maintenant = LocalDate.now();
        int ageA = maintenant.getYear() - compte.getDateDeNaissance().getYear();
        if ((compte.getDateDeNaissance().getMonthValue() > maintenant.getMonthValue()
                || (compte.getDateDeNaissance().getMonthValue() == maintenant.getMonthValue())
                && (compte.getDateDeNaissance().getDayOfMonth() > maintenant.getDayOfMonth())))
        {
            ageA--;
        }
        compte.setAge(ageA);
        return compteRepository.save(compte);
    }

    //Afficher tout les compte
    @Override
    public List<Compte> getAllCompte() {
        return compteRepository.findAll();
    }
    // Recuperer les compte par id
    @Override
    public Compte getCompteById(Long id) {
        return compteRepository.findById(id).get();
    }

    //Suprimer un compte
    @Override
    public String deleteCompte(Long id) {
        this.compteRepository.deleteById(id);
        return "Compte suprimer de la base de donnee";
    }

    //Modifier mot de passe
    @Override
    public Compte modifierMotDePasse(Long id, Compte compte) {
        Compte compt = compteRepository.findById(id).get();
        compt.setMotDePasse(compte.getMotDePasse());
        return compteRepository.save(compt);
        }

    //Choix du suivie DIABETE
    @Override
    public String suivieChoixDiabete(Long id) {
        this.compteRepository.updateSuiviDIABETE(id);
        return "Suivie ajouter";
    }

    //Choix du suivie TENSION
    @Override
    public String suivieChoixTension(Long id) {
        this.compteRepository.updateSuiviTENSION(id);
        return "Suivie ajouter";
    }

    //--------------------------------requete personnaliser----------------------------
    //Connexion compte
    @Override
    public Compte connexion(String mobile, String motDePasse) {
        Optional <Compte> connecter = compteRepository.findByMobileAndMotDePasse(mobile,motDePasse);
        return connecter.get();
    }

    //Connexion compte Email
    @Override
    public Compte connexionEmail(String email, String motDePasse) {
        Optional<Compte> connecter = compteRepository.findByEmailAndMotDePasse(email,motDePasse);
        return connecter.get();
    }

    //Connexion compte Admin
    @Override
    public Admin logIn(String mobile, String motDePasse) {
        Optional <Admin> connecte = compteRepository.findAdminByMobileAndMotDePasse(mobile, motDePasse);
        return connecte.get();
    }

    //Connexion compte Admin Email
    @Override
    public Admin logInEmail(String email, String motDePasse) {
        Optional<Admin> connecte = compteRepository.findAdminByEmailAndMotDePasse(email, motDePasse);
        return connecte.get();
    }

    //recuperer tout les comptes dont l'etat est Active
    @Override
    public List<Compte> getAllCompteActive() {
        return compteRepository.getAllCompteActive();
    }

    //recuperer tout les comptes dont l'etat est Inactive
    @Override
    public List<Compte> getAllCompteInactive() {
        return compteRepository.getAllCompteInactive();
    }

    //recuperer les comptes par id et par etat
    @Override
    public Compte getCompteByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getCompteByIdAndEtat(id, etat);
    }

    //desactiver un compte
    @Override
    public String disableCompte(Long id) {
        this.compteRepository.disableCompte(id);
        return "Compte DESACTIVER avec success !!!";
    }

    //activer un compte
    @Override
    public String enableCompte(Long id) {
        this.compteRepository.enableCompte(id);
        return "Compte ACTIVER avec success !!!";
    }

        /**-----------Medecin---------------*/
    //Afficher tout les Medecins
    @Override
    public List<Medecin> getAllMedecin() {
        return compteRepository.getAllMedecin();
    }

    @Override
    public List<Medecin> getAllMedecinActive() {
        return compteRepository.getAllMedecinActive();
    }

    @Override
    public List<Medecin> getAllMedecinInactive() {
        return compteRepository.getAllMedecinInactive();
    }

    @Override
    public Medecin getMedecinByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getMedecinByIdAndEtat(id, etat);
    }

    /**-----------Utilisateur---------------*/

    //Afficher tout les Utilisateur
    @Override
    public List<Utilisateur> getAllUtilisateur() {
        return compteRepository.getAllUtilisateur();
    }

    @Override
    public List<Utilisateur> getAllUtilisateurActive() {
        return compteRepository.getAllUtilisateurActive();
    }

    @Override
    public List<Utilisateur> getAllUtilisateurInactive() {
        return compteRepository.getAllUtilisateurInactive();
    }

    @Override
    public Utilisateur getUtilisateurByIdAndEtat(Long id, Etat etat) {
        return compteRepository.getUtilisateurByIdAndEtat(id, etat);
    }
}
