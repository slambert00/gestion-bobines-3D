<?php

$servername = 'localhost';
$username = 'root';
$password = 'mysql';
$databaseName='3D';
            

try {
    $conn=new PDO("mysql:host=$servername;dbname=$databaseName","$username","$password");
    echo "connexion établie";
}
catch (PDOException $e){echo "problème dans SQL, annulation du script\n";}
catch (Exception $e2){echo "erreur de la connexion, annulation du script en cours...\n";}




?>