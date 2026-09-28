//Antes

function obtenerEdad() {
  return 18;
}

function esMayorEdad() {
  return obtenerEdad() >= 18;
}

console.log(esMayorEdad());

//Después

function esMayorEdad() {
  return 18 >= 18;
}

console.log(esMayorEdad());

// Refactorización: Inline Method
// Se eliminó un método que solo devolvía un valor simple,
// haciendo el código más directo sin cambiar su comportamiento.