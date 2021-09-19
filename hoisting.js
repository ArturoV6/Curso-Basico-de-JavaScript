//hoisting es cuando las variables se delcaran antes que se procece el codigo.

console.log(miNombre)

var miNombre = "Oscar";

//porque sale un undefined?, cuando una variable es llamada antes de ser inicializada no podra ejecutarse porque todavia no a sido detectada, 
//asi es como se deberia escribir

var miNombres = "Oscar";

console.log(miNombres);