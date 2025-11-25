/**
 * Clase 7
 * Ejercicio 1
 */

let nombre = "Ana"; //String
let apellido = "Colombo"; //String
let edad = 23; //Numero
let tieneMascota = true; //Booleano

console.log(typeof tieneMascota);
console.log("Nombre: ", nombre, "Apellido: ",  apellido, "Edad: ", edad, "Tiene mascota: ", tieneMascota);

/**
 * Arrays
 * */

/*
* En luagr de hacer esto: 
let planeta1 = "Mercurio";
let planeta2 = "Venus";
let planeta3 = "Marte";

Hacemos esto: 
*/
let planetas = ["Mercurio", "Venus", "Marte"]
console.log(planetas.length); 

/**
 * Objetos literales
 */

let planeta = {
    nombre: "Tierra",
    satelites: ["Luna"],
    tieneAnillos: false,
    distanciaSol: 1
};

console.log(planeta.satelites[0]);

/**
 * Ejercicio 2 
 */

let persona = {
    nombre: "Ana",
    apellido: "Colombo",
    edad: 23,
    tieneMascota: true,
    comidasFavoritas: ["Hamburguesas", "Pizza"]
};

console.log(persona.comidasFavoritas[0]);

/**
 * DOM
 * */

//Variable titulo
let titulo = document.querySelector("h1");
//Mostrar titulo en consola
console.log(titulo);
//Modificar texto titulo
// titulo.innerText = "Hola";

//Variable subtitulo seccion curso
let tituloCurso = document.querySelector("#curso h2");
//Modificar estilo subtitulo
tituloCurso.style.borderBottom = "2px solid red";

/*
 * Funciones
 * */

function saludar(nombre) {
    alert("Hola " + nombre + "!");
}

//saludar("Carlos");

function sumarDosNum(num1, num2) {
    return num1 + num2;
}

let resultado = sumarDosNum(2, 5);
console.log("El resultado es: " + resultado);

/**
 * Clase 8
 * Ejercicio 1
 */

function crearLargoNombre(nombre) {
    return nombre.length;
}

let largoNombre = crearLargoNombre("Ana");
console.log("El nombre tiene " + largoNombre + " letras");

function cambiarColor() {
    let texto = document.querySelector("h1");
    if(texto) {
        texto.style.color = "lime";
    }    
}

/*
Solucion alternativa a CambiarColor()

let btn = document.querySelector("#btnColor");
btn.addEventListener("click", function() {
    console.log("Add event listener");
    let texto = document.querySelector("h1");
    texto.style.color = "lime";
});
*/

let vegetal = "lechuga";

switch (vegetal) {
    case "brocoli":
        color = "Verde";
        break;
    case "pimiento":
        color = "rojo";
        break;
    default:
        color = "blanco";
        break;
}

/*
El switch de arriba es una simplificación de este if:  */
if(vegetal == "lechuga") {
    let color =  "verde";
} else if(vegetal == "pimiento") {
    let color = "rojo";
} else {
    let color = "blanco";
}


/**
 * Ejercicio 2
 */

function crearListaSuper() {
    let listaSuper = [
        "Frutas",
        "Verduras",
        "Jabon", 
        "Chocolates", 
        "Cereales",
        "Pan"
    ];

    let articulo = prompt("Ingresá un nuevo artículo:");

    if(listaSuper.includes(articulo)) {
        alert("El artículo ya está en la lista!");
    } else {
        listaSuper.push(articulo);
        alert(listaSuper);
    }
}

/**
 * Ejercicio 3
 */

let fecha = new Date();
let hoy = fecha.getDay();

switch (hoy) {
    case 0:
        dia = "Domingo";        
        break;
    case 1:
        dia = "Lunes";        
        break;
    case 2:
        dia = "Martes";        
        break;
    case 3:
        dia = "Miércoles";        
        break;
    case 4:
        dia = "Jueves";        
        break;
    case 5:
        dia = "Viernes";        
        break;
        
    default:
        dia = "Sábado";
        break;
}

console.log("Hoy es: " + dia);

/**
 * Clase 9
 * Ejercicios clase 8
 */

function esCoordenadaRefugio(num) {
    
    if(num > 0 && (num % 2 === 0 || num % 3 === 0) && num != 15 && num != 5) {
        console.log("En esta coordenada hay un refugio!");
    }
}

let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.forEach(function(objeto) {

 console.log(objeto);

});

/**
 * Ejercicio 1
 */
let pasos = 100;

while(pasos > 0) {
    if(pasos === 1) {
        console.log("Solo falta " + pasos + " paso por caminar");
    }else {
        console.log("Solo faltan " + pasos + " pasos por caminar");
    }
    pasos--;
}







