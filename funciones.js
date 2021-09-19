//declarativas
function nombreDeFuncion(parametros) {
    "segmento de codigo para una tarea"
};

nombreDeFuncion();

//expresivas

var nombreDeFuncion = function (parametros) {
    "segmento de codigo para una tarea"
};

nombreDeFuncion();

//-----------------------------*----------------------------//

function saludarEstudiantes(estudiante) {
    console.log(`hola ${estudiante}`);
}

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}

console.log(`resultado${sumar(1,2)}`);

var nombre = "Arturo";

function fun() {
    var appellido = "Madrigal"
    return "hola " + nombre + " " + appellido    
};
