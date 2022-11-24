package com.example.masante.donnee.repository;


import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.donnee.entity.Donnee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DonneeRepository extends JpaRepository <Donnee, Long> {
    @Query("SELECT donnee FROM Donnee donnee WHERE donnee.id = (SELECT MAX(id) FROM Donnee )")
    List <Donnee> dernierDonnee();

//    @Query("SELECT donnee FROM Donnee donnee WHERE donnee.id = (SELECT MAX(id) FROM Donnee) AND donnee.utilisateur.id =:id")
//    Donnee dernierDonneeByIdAndUtilisateur(Long id, Long userId);

    // Donnee de l'utilisateur par Id_utilisateur
     @Query("SELECT MAX(d.id) FROM Donnee d,Compte u WHERE d.utilisateur.id=u.id and u.id=:id")
    List<Donnee>dernierDonneeByUser(Long id);

    // dernieres Donnee de l'utilisateur par Id_utilisateur dans donnee
    @Query("SELECT MAX(d) FROM Donnee d,Compte u WHERE d.utilisateur.id=u.id and u.id=:id")
    Donnee dernierDonneeByUserBydata(Long id);

    @Query("SELECT user FROM Donnee user WHERE user.utilisateur.id =:id")
    List <Donnee> userDonnee(long id);




}
