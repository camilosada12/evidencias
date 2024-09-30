<?php

class Operaciones
{
    private int $numeroUno;

    private int $numeroDos;

    public int $suma;

    public int $resta;

    public int $multiplicacion;

    public int $division;

    public function __construct(Numero $numeroUno,Numero $numeroDos)
    {
        $this->numeroUno=$numeroUno->getValor();
        $this->numeroDos=$numeroDos->getValor();
    }

    public function suma()
    {
        $this->suma= $this->numeroUno +  $this->numeroDos;
        
        return $this->suma;
    }
    
    public function resta()
    {
        $resta=$this->numeroUno -  $this->numeroDos;
        
        return $resta;
    }
    public function multiplicacion()
    {

        $multiplicacion=$this->numeroUno *  $this->numeroDos;
        
        return $multiplicacion;
    }
    public function division()
    {

        $division=$this->numeroUno /  $this->numeroDos;
        
        return $division;
    }
}