package com.example.masante.conseil.service;



import com.example.masante.conseil.entity.Conseil;
import com.example.masante.enumeration.Etat;
import com.example.masante.specialite.entity.Specialite;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ConseilService {
    Conseil ajouterConseil (Conseil conseil, MultipartFile file) throws IOException;     // Ajout de Conseil
    Conseil updateConseil (Long id, Conseil conseil);       // methode mise a jour (modifier) Conseil
    List<Conseil> getAllConseil();        // methode afficher tout les Conseil
    public Conseil getConseilById (Long id); // methode afficher Conseil par id
    public String deleteConseil(Long id); //Suprimer une Conseil dans la base
    public byte[] getImage(Long id) throws IOException;

    //---------------------requete personnaliser----------------------------
    List<Conseil>getAllConseilActive();       //methode recuperer tout les Conseil dont l'etat est Active
    List<Conseil>getAllConseilInactive();      //methode recuperer tout les Conseil dont l'etat est Inactive
    Conseil getConseilByIdAndEtat (Long id, Etat etat);       //methode recuperer les Conseil par id et par etat
    String disableConseil (Long id);     //methode pour desactiver un Conseil
    String enableConseil (Long id);        //methode pour activer un Conseil
}
