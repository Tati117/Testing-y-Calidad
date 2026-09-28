//Antes

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  enviarCorreo(mensaje) {
    console.log(`Enviando "${mensaje}" a ${this.correo}`);
  }

  mostrarInformacion() {
    console.log(`${this.nombre} - ${this.correo}`);
  }
}

const usuario = new Usuario("Tatiana", "tatiana@gmail.com");

usuario.mostrarInformacion();
usuario.enviarCorreo("Bienvenida");



//Después

class ServicioCorreo {
  enviar(correo, mensaje) {
    console.log(`Enviando "${mensaje}" a ${correo}`);
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  mostrarInformacion() {
    console.log(`${this.nombre} - ${this.correo}`);
  }
}

const servicioCorreo = new ServicioCorreo();
const usuario = new Usuario("Tatiana", "tatiana@gmail.com");

usuario.mostrarInformacion();
servicioCorreo.enviar(usuario.correo, "Bienvenida");

// Refactorización: Extract Class
// Se creó una nueva clase para encargarse del envío de correos.
// Ahora la clase Usuario solo administra la información del usuario,
// cumpliendo mejor con el principio de responsabilidad única.