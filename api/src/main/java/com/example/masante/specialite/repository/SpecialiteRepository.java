package com.example.masante.specialite.repository;

import com.example.masante.enumeration.Etat;
import com.example.masante.specialite.entity.Specialite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface SpecialiteRepository extends JpaRepository<Specialite,Long> {

    @Query(value = "SELECT specialite FROM Specialite specialite WHERE specialite.etat = 'ACTIVE'")
    List<Specialite> getAllSpecialiteActive();

    @Query( value = "SELECT specialite FROM Specialite specialite WHERE specialite.etat = 'INACTIVE'")
    List<Specialite>getAllSpecialiteInactive();

    @Query(value ="SELECT specialite FROM Specialite  specialite WHERE specialite.id = :id AND specialite.etat =:etat")
    Specialite getSpecialiteByIdAndEtat(Long id, Etat etat);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Specialite SET etat='INACTIVE' WHERE id=:id")
    Void disableSpecialite(Long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Specialite SET etat='ACTIVE' WHERE id=:id")
    Void enableSpecialite(Long id);

}
