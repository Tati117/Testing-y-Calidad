//Antes 

function calcularPrecio(precio, impuesto) {
  const total = precio + precio * impuesto;

  console.log(total);

  return total;
}

calcularPrecio(100, 0.19);

//Después

function obtenerTotal(precio, impuesto) {
  return precio + precio * impuesto;
}

function calcularPrecio(precio, impuesto) {
  console.log(obtenerTotal(precio, impuesto));

  return obtenerTotal(precio, impuesto);
}

calcularPrecio(100, 0.19);

// Refactorización: Replace Temp with Query
// Se reemplazó la variable temporal por un método que calcula el valor cuando es necesario.