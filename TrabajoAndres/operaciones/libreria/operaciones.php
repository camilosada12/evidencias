<?php


    class ControlOperaciones{
        private $numeroUno;
        private $numeroDos;

        public $suma;
        public $resta;
        public $multiplicar;
        public $dividir;

        
        public function __construct(Numero $numeroUno, Numero $numeroDos){
            $this -> numeroUno = $numeroUno->getValor();
            $this -> numeroDos = $numeroDos->getValor();
        }


        public function sumar(){
            $this -> suma = $this -> numeroUno + $this -> numeroDos;
        
            return $this -> suma;
        }

        public function restar(){
            $this -> resta = $this -> numeroUno - $this -> numeroDos;
        
            return $this -> resta;
        }

        public function multiplicacion(){
            $this -> multiplicar = $this -> numeroUno * $this -> numeroDos;
        
            return $this -> multiplicar;
        }

        public function division(){
            
            $this -> dividir = $this -> numeroUno / $this -> numeroDos;
        
            return $this -> dividir;
        }
    }