package com.example.masante.conseil.service;


import com.example.masante.conseil.entity.Conseil;
import com.example.masante.conseil.repository.ConseilRepository;
import com.example.masante.enumeration.Etat;
import com.example.masante.image.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class ConseilServiceImpl implements ConseilService {
    @Autowired
    ConseilRepository conseilRepository;

    // Ajout de conseil
    @Transactional
    @Override
    public Conseil ajouterConseil(Conseil conseil, @PathVariable("file") MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        conseil.setImage(fileName);
        Conseil con = conseilRepository.save(conseil);
        String uploadDir = "src/main/ressources/files/"+conseil.getId();
        Image.saveFile(uploadDir, fileName, file);
        return con;
    }

    // mise en jour conseil
    @Override
    public Conseil updateConseil(Long id, Conseil conseil) {
        LocalDateTime datea = LocalDateTime.now();
        conseil.setDate(datea);
        return conseilRepository.save(conseil);
    }

    //Afficher tout les conseil
    @Override
    public List<Conseil> getAllConseil() {
        return conseilRepository.findAll();
    }

    //Afficher conseil by Id
    @Override
    public Conseil getConseilById(Long id) {
        return conseilRepository.findById(id).get();
    }

    //Suprimer un conseil
    @Override
    public String deleteConseil(Long id) {
        this.conseilRepository.deleteById(id);
        return "Conseil suprimer dans base de donnee";
    }

    //recuperer l'image
    @Override
    public byte[] getImage(Long id) throws IOException {
        Conseil conseil = conseilRepository.getById(id);
        String iconImage = conseil.getImage();
        File file = new File("src/main/ressources/files/"+conseil.getId() + "/" + iconImage);
        Path path = Paths.get(file.toURI());
        return Files.readAllBytes(path);
    }

    /** ===================-requete personnaliser-=============================*/

    //methode recuperer tout les Conseil dont l'etat est Active
    @Override
    public List<Conseil> getAllConseilActive() {
        return conseilRepository.getAllConseilActive();
    }

    //methode recuperer tout les Conseil dont l'etat est Inactive
    @Override
    public List<Conseil> getAllConseilInactive() {
        return conseilRepository.getAllConseilInactive();
    }

    //methode recuperer les Conseil par id et par etat
    @Override
    public Conseil getConseilByIdAndEtat(Long id, Etat etat) {
        return conseilRepository.getConseilByIdAndEtat(id, etat);
    }

    //methode pour desactiver un Conseil
    @Override
    public String disableConseil(Long id) {
        this.conseilRepository.disableConseil(id);
        return "DESACTIVER avec success !!!";
    }

    //methode pour activer un Conseil
    @Override
    public String enableConseil(Long id) {
        this.conseilRepository.enableConseil(id);
        return "ACTIVER avec success !!!";
    }

}
