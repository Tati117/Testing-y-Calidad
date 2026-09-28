//Antes

function registrarCliente(nombre, correo, telefono, ciudad) {
  console.log(nombre);
  console.log(correo);
  console.log(telefono);
  console.log(ciudad);
}

registrarCliente(
  "Tatiana",
  "tatiana@gmail.com",
  "3001234567",
  "Medellín"
);

//Después

function registrarCliente(cliente) {
  console.log(cliente.nombre);
  console.log(cliente.correo);
  console.log(cliente.telefono);
  console.log(cliente.ciudad);
}

const cliente = {
  nombre: "Tatiana",
  correo: "tatiana@gmail.com",
  telefono: "3001234567",
  ciudad: "Medellín"
};

registrarCliente(cliente);

// Refactorización: Introduce Parameter Object
// Se agruparon varios parámetros relacionados en un solo objeto,
// haciendo el método más limpio y fácil de mantener.
