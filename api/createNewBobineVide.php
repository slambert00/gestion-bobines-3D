<?php

// if (isset($_POST['marque'])){$marque=$_POST["marque"];}
// else {return http_response_code(501);}
// if (isset($_POST['poidsvide'])){$poidsvide=$_POST['poidsvide'];}
// else {return http_response_code(501);}
// if (isset($_POST['poidspleine'])){$poidspleine=intval($_POST["poidspleine"]);}
// else {return http_response_code(501);}


newBobine($_GET['marque'],(float) $_GET['poidsvide'],(float) $_GET['poidsplein']);
// var_dump((float) $_GET['poidsvide']);

function newBobine($marque,$poidsVide,$poidspleine){
    
    include 'connexionMYSQL.php';

$requete="INSERT INTO bobine (marque,poidsvide,bobinepleine) values ('$marque',$poidsVide,$poidspleine)";
try {
    $conn->query($requete);
    echo " la bobine de marque $marque, poids vide $poidsVide et plein $poidspleine bien insérée dans la base de données";
    return http_response_code(200);// tout s'est bien passé
}
catch(PDOException $e){return http_response_code(555);}//555 = erreur d'insertion dans la base de données SQL
catch(Exception $e) {return http_response_code(556);}//556 = erreur de traitement php

return http_response_code();
}



?>