const prompt = require("prompt-sync")();

/// Punto 1

function calcular(total, porcentaje) {
  let propina = total * (porcentaje / 100);
  let totalFinal = total + propina;
  return totalFinal;
}

let totalCuenta = Number(prompt("¿Cuánto es el total de la cuenta? "));
let porcentajePropina = Number(prompt("¿Qué porcentaje de propina deseas dejar? "));


let resultado = calcular(totalCuenta, porcentajePropina);

console.log("El total de tu cuenta es: " + totalCuenta);
console.log("La propina de es: " + porcentajePropina);
console.log("El total incluyendo la propina es: " + resultado);

// 2.


function validarContrasena(contrasena) {
  if (contrasena.length >= 8 && contrasena.includes("A") && contrasena.includes("1")) {
    return true;
  } else {
    return false;
  }
}

let contrasena = prompt("Escribe tu contraseña: ");

if (validarContrasena(contrasena)) {
  console.log("¡Muy bien, esta es una contraseña válida!");
} else {
  console.log("Contraseña inválida. Recuerda que requieres 8 caracteres, una 'A' y un '1'");
}

// 3.

const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "Pantalón", precio: 35 }
];

let producto = prompt("¿Qué producto buscas? ").toUpperCase();

if (producto === "Camisa") {
  console.log("Precio: $20");
} else if (producto === "Zapatos") {
  console.log("Precio: $50");
} else if (producto === "Pantalón") {
  console.log("Precio: $35");
} else {
  console.log("Producto no encontrado");
}

// 4.

let entrada = prompt("¡Hola! Por favor, ingresa tus notas separadas por comas: ");
let notas = entrada.split(",").map(Number);


function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  let promedio = suma / notas.length;
  return promedio.toFixed(2); 
}

console.log("El promedio de tus notas es: " + calcularPromedio(notas));

//5.

const usuarios = [
  { nombre: "Sara", edad: 25 },
  { nombre: "Ana", edad: 10 },
  { nombre: "Luis", edad: 49 },
  { nombre: "Zamir", edad: 13 }
];

function filtrarUsuarios(usuarios, edadMinima) {
  let solucion = [];

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= edadMinima) {
      solucion.push(usuarios[i]);
    }
  }

  return solucion;
}

console.log(filtrarUsuarios(usuarios, 18));


// 6.

function contarPalabras(texto) {
  let palabras = texto.split(" "); 
  return palabras.length;
}

let contador = prompt("¡Hola, por favor escribe el texto aquí! ");
console.log("El contador arrojó este número de palabras:", contarPalabras(contador));

// 7.

function retirarDinero() {
  let saldo = Number(prompt("¿Cuál es tu saldo actual?: "));
  let monto = Number(prompt("¿Cuánto deseas retirar?: "));

  if (monto <= saldo) {
    saldo -= monto;
    console.log("¡Muy bien! Este es el saldo actual:", saldo);
  } else {
    console.log("Fondos insuficientes.");
  }
}

retirarDinero();

// 8.

function convertirMoneda() {
  let monto = Number(prompt("Ingresa el dinero que deseas convertir de COP$: "));
  let monedaDestino = prompt("¿Deseas cambias 'USD' o 'EUR'? : ").toUpperCase();

  let resultado;

  if (monedaDestino === "USD") {
    resultado = monto / 5000; 
  } else if (monedaDestino === "EUR") {
    resultado = monto / 5500; 
  } else {
    console.log("Esa acción no es válida, intenta de nuevo.");
    return;
  }

  console.log(`Tu resultado es el siguiente : ${resultado.toFixed(2)} ${monedaDestino}`);
}

convertirMoneda();