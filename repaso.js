/**
 * Función: ejercicio1
 * Descripción: Imprime los números del 1 al 5 en consola.
 */
function ejercicio1() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

/**
 * Función: imprimirCentenas
 * Descripción: Imprime números de 100 en 100 hasta llegar a 1000.
 */
function imprimirCentenas() {
  for (let i = 100; i <= 1000; i += 100) {
    console.log(i);
  }
}

/**
 * Función: imprimirCentenasRegresivo
 * Descripción: Imprime números desde 1000 hasta 800 en forma descendente,
 * restando de 100 en 100.
 */
function imprimirCentenasRegresivo() {
  for (let i = 1000; i >= 800; i -= 100) {
    console.log(i);
  }
}

/**
 * Función: mostrarMensaje1
 * Descripción: Imprime un mensaje 3 veces iniciando desde 5
 * usando la condición i < 8.
 */
function mostrarMensaje1() {
  for (let i = 5; i < 8; i++) {
    console.log("Mensaje " + i);
  }
}

/**
 * Función: mostrarMensaje2
 * Descripción: Imprime un mensaje desde 10 hasta 12
 * usando la condición i <= 12.
 */
function mostrarMensaje2() {
  for (let i = 10; i >= 8; i--) {
    console.log("Mensaje Dos " + i);
  }
}

/**
 * Función: mostrarMensaje3
 * Descripción: Imprime un mensaje 3 veces comenzando desde 0.
 */
function mostrarMensaje3() {
  for (let i = 0; i < 3; i++) {
    console.log("Mensaje Tres " + i);
  }
}

/**
 * Función: mostrarMensaje4
 * Descripción: (OJO: tiene un error lógico)
 * La condición i > 11 nunca se cumple porque inicia en 8.
 * Por lo tanto, este bucle NO se ejecuta.
 */
function mostrarMensaje4() {
  for (let i = 8; i > 5; i--) {
    console.log("Mensaje Cuatro " + i);
  }
}

/**
 * Función: tablaDel3
 * Descripción: Muestra la tabla de multiplicar del número 3
 * desde 1 hasta 10.
 */
function tablaDel3() {
  const numero = 3;
  for (let i = 1; i <= 10; i++) {
    console.log(numero + "*" + i + "=" + numero * i);
  }
}

/**
 * Función: mostrar
 * Parámetro: opcion (número)
 * Descripción: Ejecuta una función dependiendo del valor recibido.
 * Usa una estructura switch para seleccionar la opción.
 */
function mostrar(opcion) {
  switch (opcion) {
    case 1:
      ejercicio1();
      break;
    case 2:
      imprimirCentenas();
      break;
    case 3:
      imprimirCentenasRegresivo();
      break;
    case 4:
      mostrarMensaje1();
      break;
    case 5:
      mostrarMensaje2();
      break;
    case 6:
      mostrarMensaje3();
      break;
    case 7:
      mostrarMensaje4();
      break;
    case 8:
      tablaDel3();
      break;
    default:
      console.log("Opción no válida");
      break;
  }
}