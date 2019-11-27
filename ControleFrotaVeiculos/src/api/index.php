<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: multipart/form-data');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Host, Connection, Accept, Authorization, Content-Type, X-Requested-With, User-Agent, Referer, Methods');
if($_SERVER["REQUEST_METHOD"]== "OPTIONS"){
    echo "";die;
}
include("ClassVeiculos.php");

if ($_SERVER['REQUEST_METHOD'] == 'POST') { 
    $classe = new ClassVeiculos();
    $classe->insert($_POST);
}
else if ($_SERVER['REQUEST_METHOD'] == 'DELETE' ) {
    $classe = new ClassVeiculos();
    $classe->delete('');
} 
else {
    $nomeClasse = $_GET['classe'];
    $metodo  = $_GET['metodo'];
    $classe = new $nomeClasse();
    $classe->$metodo();
}



