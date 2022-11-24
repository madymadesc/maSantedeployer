package com.example.masante.compte.repository;

import com.example.masante.compte.entity.Admin;
import com.example.masante.compte.entity.Compte;
import com.example.masante.compte.entity.Medecin;
import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.enumeration.Etat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@CrossOrigin("*")
public interface CompteRepository extends JpaRepository <Compte, Long>{

    Optional<Compte> findByMobileAndMotDePasse(String mobile, String motDePasse);
    Optional<Compte> findByEmailAndMotDePasse(String email, String motDePasse);

    Optional<Admin> findAdminByMobileAndMotDePasse(String mobile, String motDePasse);
    Optional<Admin> findAdminByEmailAndMotDePasse(String email, String motDePasse);


    @Query(value = "SELECT compte FROM Compte  compte WHERE compte.etat = 'ACTIVE'")
    List<Compte>getAllCompteActive();

    @Query( value = "SELECT compte FROM Compte compte WHERE compte.etat = 'INACTIVE'")
    List<Compte>getAllCompteInactive();

    @Query(value ="SELECT compte FROM Compte compte WHERE compte.id = :id AND compte.etat =:etat")
    Compte getCompteByIdAndEtat(Long id, Etat etat);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Compte SET etat='INACTIVE' WHERE id=:id")
    Void disableCompte(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Compte SET etat='ACTIVE' WHERE id=:id")
    Void enableCompte(Long id);

    // Choix du suivi DIABETE
    @Transactional
    @Modifying
    @Query(value = "UPDATE Utilisateur  SET suivie ='DIABETE' WHERE id =:id")
    void updateSuiviDIABETE(Long id);

    // Choix du suivi TENSION
    @Transactional
    @Modifying
    @Query(value = "UPDATE Utilisateur SET suivie ='TENSION' WHERE id =:id")
    void updateSuiviTENSION(Long id);

    //-----------------Change etat compte-------------//
    @Transactional
    @Modifying
    @Query(value = "UPDATE Compte SET etat=:etat WHERE id=:id")
    void changeEtat(Long id);
    //---------------Medecin----------------//
    @Query(value = "SELECT med FROM Medecin med")
    List<Medecin> getAllMedecin();

    @Query(value ="SELECT med FROM Medecin med WHERE med.id = :id AND med.etat =:etat")
    Medecin getMedecinByIdAndEtat(Long id, Etat etat);

    @Query(value = "SELECT med FROM Medecin med WHERE med.etat = 'ACTIVE'")
    List<Medecin>getAllMedecinActive();

    @Query( value = "SELECT med FROM Medecin med WHERE med.etat = 'INACTIVE'")
    List<Medecin>getAllMedecinInactive();

    //---------------Utilisateur---------------//
    @Query(value = "SELECT user FROM Utilisateur user")
    List<Utilisateur> getAllUtilisateur();

    @Query(value ="SELECT user FROM Utilisateur user WHERE user.id = :id AND user.etat =:etat")
    Utilisateur getUtilisateurByIdAndEtat(Long id, Etat etat);

    @Query(value = "SELECT user FROM Utilisateur user WHERE user.etat = 'ACTIVE'")
    List<Utilisateur>getAllUtilisateurActive();

    @Query( value = "SELECT user FROM Utilisateur user WHERE user.etat = 'INACTIVE'")
    List<Utilisateur>getAllUtilisateurInactive();



}
