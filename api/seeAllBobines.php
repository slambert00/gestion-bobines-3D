<?php

include 'connexionMYSQL.php';


$query=$conn->query("select * from bobine");
$resultat=$query->fetchAll();
var_dump($resultat);


?>