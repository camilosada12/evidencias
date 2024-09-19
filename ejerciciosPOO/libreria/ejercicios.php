<?php

class Saludar {
    private $saludar;

    public function setSaludar($saludar1) {
        $this->saludar = $saludar1;
    }

    public function getSaludar() {
        return $this->saludar;
    }
}

class Operacion {
    private $numeroUno;
    private $numeroDos;

    public function setNumeroUno($numeroUno) {
        $this->numeroUno = $numeroUno;
    }

    public function getNumeroUno() {
        return $this->numeroUno;
    }

    public function setNumeroDos($numeroDos) {
        $this->numeroDos = $numeroDos;
    }

    public function getNumeroDos() {
        return $this->numeroDos;
    }
}

class ControlOperaciones {
    public $sumaNum;
    public $restaNum;
    public $multiplicacion;
    public $divisionNum;

    public function suma($numeroUno, $numeroDos) {
        $this->sumaNum = $numeroUno + $numeroDos;
        return $this->sumaNum;
    }

    public function resta($numeroUno, $numeroDos) {
        $this->restaNum = $numeroUno - $numeroDos;
        return $this->restaNum;
    }

    public function multi($numeroUno, $numeroDos) {
        $this->multiplicacion = $numeroUno * $numeroDos;
        return $this->multiplicacion;
    }

    public function division($numeroUno, $numeroDos) {
        if ($numeroDos != 0) {
            $this->divisionNum = $numeroUno / $numeroDos;
            return $this->divisionNum;
        } else {
            return "No se puede dividir por 0";
        }
    }
}
?>
