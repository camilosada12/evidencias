<?php

    class nomina
    {
        private $diasTrabajados;
        private $valorDias;

        public function __construct(valores $diasTrabajados, valores $valorDias)
        {
            $this->diasTrabajados=$diasTrabajados->getValor();
            $this->valorDias=$valorDias->getValor();
        }

        public function sueldo()
        {
            $this->sueldo=$this->diasTrabajados * $this->valorDias;

            return $this->sueldo;
        }


        public function salud()
        {
            $this->salud=$this->sueldo * 0.12;
            
            return $this->salud;
        }

        public function arl()
        {
            $this->arl=$this->sueldo * 0.052;
            
            return $this->arl;
        }

        public function pension()
        {
            $this->pension=$this->sueldo * 0.052;
            
            return $this->pension;
        }


        public function deducibles()
        {
            $this->deducibles= $this->pension + $this->salud + $this->arl;
            
            return $this->deducibles;
        }


        public function subTrasporte()
        {
            if($this->sueldo > 1300000)
            {
                $this->subTrasporte=0;
            }else{
                $this->subTrasporte=118000;
            }

            return $this->subTrasporte;
        }


        public function totalPagar()
        {
            $this->totalPagar= ($this->sueldo - $this->deducibles) + $this->subTrasporte;
            
            return $this->totalPagar;
        }
    }

?>