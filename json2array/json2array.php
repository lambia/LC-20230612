<?php

// $stringa = '[{"name":"Mario","last_name":"Rossi"},{"name":"Giovanna","last_name":"Bianchi"}]';
// $students = json_decode($stringa, true);

$stringa = file_get_contents('studenti.json');
$students = json_decode($stringa, true);

for ($i=0; $i < count($students); $i++) { 
    echo "Nome: " . $students[$i]["name"] . "<br>";
}

// var_dump($manuale);
// var_dump($students1);
// var_dump($students2);

?>