<?php
    include('sacarArea.php');
    include('areas.php');

    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $ladoC = $data['txtLadoC'];
    $baseRec = $data['txtBaseRec'];
    $alruraRec = $data['txtalturaRec'];
    $baseTri = $data['txtBaseTri'];
    $alturaTri = $data['txtAlturaTri'];

    $areaFigura = new areaFigura($ladoC, $baseRec, $alruraRec, $baseTri, $alturaTri);
    $area = new areas($areaFigura);

    $responde = [];
    $responde['areaCuadrado'] = $area->areaCuadrado();
    $responde['areaRectangulo'] = $area->areaRectangulo();
    $responde['areaTriangulo'] = $area->areaTriangulo();

    header('Content-Type: application/json');
    echo json_encode($responde);
?>