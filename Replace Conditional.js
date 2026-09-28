//Antes

function calcularSalario(tipo) {
  if (tipo === "Gerente") {
    return 5000;
  }

  if (tipo === "Desarrollador") {
    return 3500;
  }

  return 2500;
}

console.log(calcularSalario("Gerente"));


//Después

class Empleado {
  calcularSalario() {}
}

class Gerente extends Empleado {
  calcularSalario() {
    return 5000;
  }
}

class Desarrollador extends Empleado {
  calcularSalario() {
    return 3500;
  }
}

const gerente = new Gerente();

console.log(gerente.calcularSalario());

// Refactorización: Replace Conditional with Polymorphism
// Se reemplazó el uso de condicionales por clases que implementan
// su propio comportamiento, facilitando agregar nuevos tipos.