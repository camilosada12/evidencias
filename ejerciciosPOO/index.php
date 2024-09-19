<?php
include("./libreria/ejercicios.php");

$saludo = new Saludar();
$saludo->setSaludar("Hola Mundo");

$numeroUno = new Operacion();
$numeroDos = new Operacion();
$numeroUno->setNumeroUno(50);
$numeroDos->setNumeroDos(20);

$operador = new ControlOperaciones();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    echo $saludo->getSaludar() . "<br>";
    echo "Número Uno: " . $numeroUno->getNumeroUno() . "<br>";
    echo "Número Dos: " . $numeroDos->getNumeroDos() . "<br>";
    echo "Suma: " . $operador->suma($numeroUno->getNumeroUno(), $numeroDos->getNumeroDos()) . "<br>";
    echo "Resta: " . $operador->resta($numeroUno->getNumeroUno(), $numeroDos->getNumeroDos()) . "<br>";
    echo "Multiplicación: " . $operador->multi($numeroUno->getNumeroUno(), $numeroDos->getNumeroDos()) . "<br>";
    echo "División: " . $operador->division($numeroUno->getNumeroUno(), $numeroDos->getNumeroDos()) . "<br>";
    ?>
</body>
</html>
