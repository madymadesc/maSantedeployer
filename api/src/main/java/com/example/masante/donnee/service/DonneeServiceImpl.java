package com.example.masante.donnee.service;

import com.example.masante.compte.entity.Utilisateur;
import com.example.masante.maladie.entity.Maladie;
import com.example.masante.donnee.entity.Donnee;
import com.example.masante.donnee.repository.DonneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonneeServiceImpl implements DonneeService {

    @Autowired
    DonneeRepository donneeRepository;
    Donnee donnee;
    Maladie maladie;

    // Ajout de donnee
    @Override
    public String ajouterDonnee(Donnee donnee) {
        this.donneeRepository.save(donnee);
        return "Donnee ajouter avec success";
    }

    //mis a jour (modifier) Donnee
    @Override
    public Donnee updateDonnee(Long id, Donnee donnee) {
        return donneeRepository.save(donnee);
    }

    //Afficher tout les donnee
    @Override
    public List<Donnee> getAllDonnee() {
        return donneeRepository.findAll();
    }

    //Afficher donnee by Id
    @Override
    public Donnee getDonneeById(Long id) {
        return donneeRepository.findById(id).get();
    }

    //Suprimer un donnee
    @Override
    public String deleteDonnee(Long id) {
        this.donneeRepository.deleteById(id);
        return "Donnee suprimer dans base de donnee";
    }

    /**=======================____AALLGGOO____================================*/

    @Override
    public String calcul(Donnee donnee) {
        String resultat="";
        /**---------------------------DIABETE-----------------*/
//        if (donnee.getMalad()==1)
//            {
//                if (donnee.getUnite()==2)       //Unite "mg/dl" expl: 70
//            {
//
//                if (donnee.getValeurA() <= 70)
//                {
//                    resultat = donnee.getValeurA() + " Hypoglycémie";
//                }
//                else if(donnee.getValeurA() >= 70 && donnee.getValeurA() <= 100)
//                {
//                    resultat = donnee.getValeurA() + " Glycémie normale";
//                }
//                else if(donnee.getValeurA() >= 100 && donnee.getValeurA() <= 125)
//                {
//                    resultat = donnee.getValeurA() + " Hyperglycémie modérée";
//                }
//                else if(donnee.getValeurA() >= 126)
//                {
//                    resultat = donnee.getValeurA() + " Diabète";
//                }
//                else
//                {
//                    resultat = "les valeurs ne correspond pas à notre analyse ";
//                }
//
//            }
//                else if (donnee.getUnite()==3)      //unite "g/l" expl: 0.7
//            {
//                if (donnee.getValeurC() <= 0.7){
//                    resultat = donnee.getValeurC() + " Hypoglycémie";
//                }else if(donnee.getValeurC() >= 0.7 && donnee.getValeurC() <= 1)
//                {
//                    resultat =  donnee.getValeurC() + " Glycémie normale";
//                }else if(donnee.getValeurC() >= 1 && donnee.getValeurC() <= 1.25)
//                {
//                    System.out.println(donnee.getValeurC() + " Hyperglycémie modérée");
//                }else if(donnee.getValeurC() >= 1.26)
//                {
//                    resultat =  donnee.getValeurC() + " Diabète";
//                }else
//                {
//                    resultat = "les valeurs ne correspond pas à notre analyse ";
//                }
//            }else
//            {
//                resultat = "les valeurs ne correspond pas à notre analyse ";
//            }
//        }
        /**---------------------------TENSION-----------------*/
//        else if (donnee.getMalad()==0)
//        {
//
//            if (donnee.getValeurA() < 120 && donnee.getValeurB() < 80)
//            {
//                resultat =  "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Optimale";
//            }
//            else if((donnee.getValeurA() >= 120 && donnee.getValeurA() <= 129) && (donnee.getValeurB()>= 80 && donnee.getValeurB()<= 84))
//            {
//                resultat = "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Normal";
//            }
//            else if((donnee.getValeurA() >= 130 && donnee.getValeurA() <= 139) && (donnee.getValeurB() >= 85 && donnee.getValeurB() <= 89))
//            {
//                resultat = "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Normal Haute";
//            }
//            else if((donnee.getValeurA() >= 140 && donnee.getValeurA() <=159) && (donnee.getValeurB() >= 90 && donnee.getValeurB() <= 99))
//            {
//                resultat = "valeur Systolique : "+ donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Hypertention grade1";
//            }
//            else if((donnee.getValeurA() >= 160 && donnee.getValeurA() <=179) && (donnee.getValeurA() >= 100 && donnee.getValeurB() <= 109))
//            {
//                resultat = "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Hypertention grade2";
//            }
//            else if(donnee.getValeurA() >= 180 && donnee.getValeurA()>=110)
//            {
//                resultat =  "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Hypertention grade3";
//            }
//            else if(donnee.getValeurA() >= 140 && donnee.getValeurA() <90)
//            {
//                resultat = "valeur Systolique : " + donnee.getValeurA() + " valeur Diastolique : " + donnee.getValeurB() + " Hypertention Systolique isolee";
//            }
//            else
//            {
//                resultat = "les valeurs ne correspond pas à notre analyse ";
//            }
//        }
//        else
//        {
//            resultat = "les valeurs ne correspond pas à notre analyse ";
//        }
//        donnee.setResultat(resultat);
//        this.donneeRepository.save(donnee);
//        return donnee.toString();
        return null;
    }

    /**===========================TENSION===========================*/
    @Override
    public String calculTension(Donnee donnee) {
        String donneeTension="";
        int couleurs = 0;
        donnee.setMaladies("TENSION");

        if (donnee.getValeurA() <= 120 && donnee.getValeurB() <= 80)
        {
            donneeTension =  "Optimale";
            couleurs = 1;
        }
        else if((donnee.getValeurA() >= 120 && donnee.getValeurA() <= 129) && (donnee.getValeurB()>= 80 && donnee.getValeurB()<= 84))
        {
            donneeTension = " Normal";
            couleurs = 1;
        }
        else if((donnee.getValeurA() >= 130 && donnee.getValeurA() <= 139) && (donnee.getValeurB() >= 85 && donnee.getValeurB() <= 89))
        {
            donneeTension = " Normal Haute";
            couleurs = 2;
        }
        else if((donnee.getValeurA() >= 140 && donnee.getValeurA() <=159) && (donnee.getValeurB() >= 90 && donnee.getValeurB() <= 99))
        {
            donneeTension = " Hypertention grade1";
            couleurs = 3;
        }
        else if((donnee.getValeurA() >= 160 && donnee.getValeurA() <=179) && (donnee.getValeurA() >= 100 && donnee.getValeurB() <= 109))
        {
            donneeTension = " Hypertention grade2";
            couleurs = 3;
        }
        else if(donnee.getValeurA() >= 180 && donnee.getValeurA()>=110)
        {
            donneeTension = " Hypertention grade3";
            couleurs = 3;
        }
        else if(donnee.getValeurA() >= 140 && donnee.getValeurA() <90)
        {
            donneeTension = " Hypertention Systolique isolee";
            couleurs = 3;
        }
        else
        {
            donneeTension = "les valeurs ne correspond pas à notre analyse ";
        }
        donnee.setResultat(donneeTension);
        donnee.setCouleur(couleurs);
        this.donneeRepository.save(donnee);
        return donnee.toString();
    }


    /**==========================DIABETE============================*/
    @Override
    public String calculDiabete(Donnee donnee) {
        String donneeDiabete = "";
        int couleurs = 0;
        donnee.setMaladies("DIABETE");
            if (donnee.getUnite()==2)       //Unite "mg/dl" expl: 70
            {
                if (donnee.getValeurA() <= 70)
                {
                    donneeDiabete =" Hypoglycémie";
                    couleurs = 1;
                }
                else if(donnee.getValeurA() >= 70 && donnee.getValeurA() <= 100)
                {
                    donneeDiabete =  " Glycémie normale";
                    couleurs = 1;
                }
                else if(donnee.getValeurA() >= 100 && donnee.getValeurA() <= 125)
                {
                    donneeDiabete = " Hyperglycémie modérée";
                    couleurs = 2;
                }
                else if(donnee.getValeurA() >= 126)
                {
                    donneeDiabete = " Diabète";
                    couleurs = 3;
                }
                else
                {
                    donneeDiabete = "les valeurs ne correspond pas à notre analyse ";
                }

            }
            else if (donnee.getUnite()==3)      //unite "g/l" expl: 0.7
            {
                if (donnee.getValeurC() <= 0.7){
                    donneeDiabete = " Hypoglycémie";
                    couleurs = 1;
                }else if(donnee.getValeurC() >= 0.7 && donnee.getValeurC() <= 1)
                {
                    donneeDiabete =  " Glycémie normale";
                    couleurs = 1;
                }else if(donnee.getValeurC() >= 1 && donnee.getValeurC() <= 1.25)
                {
                    donneeDiabete= " Hyperglycémie modérée";
                    couleurs = 2;
                }else if(donnee.getValeurC() >= 1.26)
                {
                    donneeDiabete = " Diabète";
                    couleurs = 3;
                }else
                {
                    donneeDiabete = "les valeurs ne correspond pas à notre analyse ";
                }
            }else
            {
                donneeDiabete = "les valeurs ne correspond pas à notre analyse ";
            }
        donnee.setResultat(donneeDiabete);
            donnee.setCouleur(couleurs);
        this.donneeRepository.save(donnee);
        return donnee.toString();
    }


    /**===========================DERNIER DONNEE==============*/
    @Override
    public List<Donnee> dernierDonnee() {
        return donneeRepository.dernierDonnee();
    }

    @Override
    public List<Donnee> donneeByUser(Long id) {
        return donneeRepository.dernierDonneeByUser(id);
    }

    @Override
    public Donnee donneeByUserByData(Long id) {
        return donneeRepository.dernierDonneeByUserBydata(id);
    }


    @Override
    public List<Donnee> userDonnee(long id) {
        return donneeRepository.userDonnee(id);
    }

    //dernier donner par utilisateur
//    @Override
//    public Donnee dernierDonneeByIdAndUtilisateur(Long id, Long userId) {
//        return donneeRepository.dernierDonneeByIdAndUtilisateur(id,userId);
//    }

}
