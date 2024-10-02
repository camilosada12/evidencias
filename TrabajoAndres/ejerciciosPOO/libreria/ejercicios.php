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

class nomina{
    private $valorDias;
    private $DiasTrabajados;
    public $salarioM = 1300000;
    public $sueldo;
    public $pension;
    public $arl;
    public $retencion;
    public $sueldoTotal;
    public $subtrasporte;
    public $deducibles;
    public $salud;

    public function setValorDias($valorDias) {
        $this->valorDias = $valorDias;
    }

    public function getValorDias() {
        return $this->valorDias;
    }

    public function setDiasTrabajados($DiasTrabajados) {
        $this->DiasTrabajados = $DiasTrabajados;
    }

    public function getDiasTrabajados() {
        return $this->DiasTrabajados;
    }

    public function salario(){
        $this->sueldo = $this->valorDias * $this->DiasTrabajados;
        return $this->sueldo;
    }
    public function saludP(){
        $this->salud = $this->sueldo * 0.12;
        return $this->salud;
    }
    public function pensionP(){
        $this->pension = $this->sueldo * 0.16;
        return $this->pension;
    }
    public function arlP(){
        $this->arl = $this->sueldo * 0.052;
        return $this->arl;
    }
    public function retencionP(){
        if($this->sueldo > $this->salarioM *4){
            $this->retencion = $this->sueldo * 0.004;
        }else{
            $this->retencion = 0;
        }
        return $this->retencion;
    }

    public function subtrasporteP(){
        if($this->sueldo < $this->salarioM ){
            $this->subtrasporte = 114000;
        }else{
            $this->subtrasporte = 0;
        }
        return $this->subtrasporte;
    }
    public function deduciblesP(){
       $this->deducibles =  $this->salud + $this->pension + $this->arl;
        return $this->deducibles;
    }
    public function sueldoP(){
        $this->sueldoTotal =  ($this->sueldo + $this->subtrasporte) - ($this->retencion + $this->deducibles);
         return $this->sueldoTotal;
     }
}
?>

