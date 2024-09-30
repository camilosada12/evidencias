<?php

    class persona
    {

        private $nombre;
        private $apellido;

        public function __construct($nombre,$apellido){
            $this->nombre=$nombre;
            $this->apellido=$apellido;
        }
        public function setNombre()
        {
            $this->nombre;
        }
        public function getNombre()
        {
            return $this->nombre;
        }
        public function setApellido()
        {
            $this->apellido;
        }
        public function getApellido()
        {
            return $this->apellido;
        }
    }

?>