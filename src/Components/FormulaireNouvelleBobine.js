import React from "react";
import { Button, List, TextField } from "@mui/material";
import axios from "axios";


function MyFormulaire(){
    return <List id="formulaireNouvelleBobine">
        <TextField  label="marque" variant="filled" id='marque' onChange={afficherBouton}/>
        <TextField  label="poids à vide" variant="filled" id='poidsvide' onChange={afficherBouton} />
        <TextField  label="poids à plein" variant="filled" id='poidsplein' onChange={afficherBouton}/>
        <Button variant='contained' id='boutonEntreeNouvelleBobine' style={{visibility:'hidden'}} onClick={envoiDesDonneesNewBobineBdd}>enregistrer la bobine</Button>
    </List>
}

function afficherBouton(){
    replacePointsVirgule();
    replacePointsVirgule2();
    var entrerMarque=document.getElementById("marque");
    var poidsVide=document.getElementById("poidsvide");
    var poidsplein=document.getElementById("poidsplein");
    if (IsNotEmpty(entrerMarque) && IsNotEmpty(poidsVide) && IsNotEmpty(poidsplein)  ){ 
        document.getElementById("boutonEntreeNouvelleBobine").style.visibility='visible';
    }
}

function replacePointsVirgule(){
    var poidsVide=document.getElementById("poidsvide");
    var oldpoidsVide=poidsVide.value;
    var newpoidsVide=oldpoidsVide.replace('.',',');
    poidsVide.value=newpoidsVide;
}

function replacePointsVirgule2(){
    var poidsplein=document.getElementById("poidsplein");
    var oldpoidsplein=poidsplein.value;
    var newpoidsplein=oldpoidsplein.replace('.',',');
    poidsplein.value=newpoidsplein;
}

function envoiDesDonneesNewBobineBdd(){
    var entrerMarque=(document.getElementById("marque")).value;
    var poidsVide=(document.getElementById("poidsvide")).value;
    poidsVide=poidsVide.replace(',','.');
    poidsVide=parseFloat(poidsVide);
    var poidsplein=parseFloat((document.getElementById("poidsplein")).value);
    console.log('insertion en cours dans la base de données');
    axios.get('http://localhost:3500/api/createNewBobineVide.php?marque='+entrerMarque+'&poidsvide='+poidsVide+'&poidsplein='+poidsplein)
      .then(function (response) {
        console.log(response);
        console.log("donnée insérée dans la base de données");
      })
      .catch(function (error) {
        console.log(error);
      });
}

function IsNotEmpty(inputtx) 
{
  if (inputtx.value.length === 0)
   { 
      return false; 
   }  	
   return true; 
 } 

export default MyFormulaire;