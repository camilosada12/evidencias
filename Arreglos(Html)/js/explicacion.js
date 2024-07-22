
// primer ejercicio
let objeto = {
    "nombre" : "Juan",
    "edad" : 30, 
    "ocupacion" : "desarrollador"
};

for(let clave in objeto){
    console.log(clave + " : " + objeto[clave]);
}


// segundo ejercicio 
let mapa = new Map();
mapa.set("nombre" , "Juan");
mapa.set("edad" , 30);

for(let [clave, valor] of mapa){
    console.log(clave + " : " + valor);
}

//tercer ejercicio con Arreglos

let Arreglos = [
    {clave : "nombre" , valor : "juan"},
    {clave : "edad" ,  valor : 30}
];

for(let elemento of Arreglos){
    console.log(elemento.clave + " : " + elemento.valor);
}

//cuarto ejercicio

let pares = [
    ["nombres" , "pepito"],
    ["edad" , 30]
];


for(let[clave , valor] of pares){
    console.log(clave + ": " + valor);
}