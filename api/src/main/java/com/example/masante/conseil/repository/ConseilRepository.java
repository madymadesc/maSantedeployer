package com.example.masante.conseil.repository;

import com.example.masante.conseil.entity.Conseil;
import com.example.masante.enumeration.Etat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface ConseilRepository extends JpaRepository <Conseil, Long> {


    // Recuperer les conseil active
    @Query(value = "SELECT conseil FROM Conseil conseil WHERE conseil.etat = 'ACTIVE'")
    List<Conseil> getAllConseilActive();

    // Recuperer les conseil inactive
    @Query( value = "SELECT conseil FROM Conseil conseil WHERE conseil.etat = 'INACTIVE'")
    List<Conseil>getAllConseilInactive();

    // Recuperer les conseil par id et etat
    @Query(value ="SELECT conseil FROM Conseil conseil WHERE conseil.id = :id AND conseil.etat =:etat")
    Conseil getConseilByIdAndEtat(Long id, Etat etat);

    // Changer l'etat conseil en Inactive
    @Transactional
    @Modifying
    @Query(value = "UPDATE Conseil SET etat='INACTIVE' WHERE id=:id")
    Void disableConseil(Long id);

    // Changer l'etat conseil en Active
    @Transactional
    @Modifying
    @Query(value = "UPDATE Conseil SET etat='ACTIVE' WHERE id=:id")
    Void enableConseil(Long id);
}
