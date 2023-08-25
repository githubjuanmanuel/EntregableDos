const suma = (a, b) => {
  /**
   * a y b son los parámetros de entrada.
   * La función debe devolver la suma de los parámetros de entrada
   * Debes generar el código para que la función haga lo solicitado.
   */
  return a + b;
};

const sonIguales = (x, y) => {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Debes generar el código para que la función haga lo solicitado.
  return x === y;
};

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return str1.length === str2.length;
}

function esPositivo(numero) {
  /**
   * la función recibe como parámetro de entrada un número entero.
   * Devuelve como resultado una cadena de texto que indica si el
   * número es positivo o negativo.
   * Si el número es positivo, devolver ---> "Es positivo"
   * Si el número es negativo, devolver ---> "Es negativo"
   * Si el número es 0, devuelve false
   * Tu código:
   */
  if (numero > 0) {
    return "Es positivo";
  } else if (numero < 0) {
    return "Es negativo";
  } else {
    return false;
  }
}

const colors = (color) => {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuelve --> "This is blue"
  //En caso que el color recibido sea "red", devuelve --> "This is red"
  //En caso que el color recibido sea "green", devuelve --> "This is green"
  //En caso que el color recibido sea "orange", devuelve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  const colores = {
    blue: "This is blue",
    red: "This is red",
    green: "This is green",
    orange: "This is orange",
  };
  const Colordefault = "Color not found";

  return colores[color] || Colordefault;
};

const fizzBuzz = (numero) => {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  }
  if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 == 0) {
    return "buzz";
  } else {
    return numero;
  }
};

const devolverPrimerElemento = (array) => {
  /**
   * La función recibe como parámetro de entrada un arreglo.
   * La función debe regresar el primer elemento del arreglo
   */
  // Tu código:

  return array[0];
};

const agregarItemAlFinalDelArray = (array, elemento) => {
  /**
   * La función recibe dos parámetros de entrada, un arreglo y un elemento
   * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
   */
  // Tu código:
  array.push(elemento);
  return array;
};

const nuevoUsuario = (nombre, email, password) => {
  /**
   * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
   * que se pasan a la función.  Devuelve el objeto
   */
  // Tu código:
  const Usuario = {
    name: nombre,
    mail: email,
    passw: password,
  };
  return Usuario;
};

const verificarPassword = (usuario, password) => {
  // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  const datosUsuario = nuevoUsuario("Juan", "Correo@correo.com", "1234hn#");
  if (usuario === datosUsuario.name && password === datosUsuario.passw) {
    return true;
  } else {
    return false;
  }
};

const actualizarPassword = (usuario, nuevaPassword) => {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  if (verificarPassword("Juan", "1234hn#")) {
    usuario.password = nuevaPassword;
    return usuario;
  }
};

const agregarAmigo = (usuario, nuevoAmigo) => {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  const cambioUsuario = {
    name: usuario.name,
    mail: usuario.mail,
    passw: usuario.passw,
    friends: [],
  };

  cambioUsuario.friends.push(nuevoAmigo);
  return cambioUsuario;
};

const pasarUsuarioAPremium = (usuarios) => {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  usuarios.forEach((usuario) => {
    usuario.esPremium = true;
  });

  return usuarios;
};

const sumarLikesDeUsuario = (usuario) => {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  let suma = 0;
  usuario.posts.forEach((post) => (suma += post.likes));
  return suma;
};

class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  //Ej: {
  //   Nombre: 'Juan',
  //   Apellido: 'Perez',
  //   Edad: 22,
  //   Domicilio: 'Saavedra 123'
  //  }
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      domicilio: this.domicilio,
    };
  }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir) => {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada

  const persona = new Persona(nombre, apellido, edad, dir);
  return persona;
};

const sumarArray = (numeros, cb) => {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  let suma = numeros.reduce((num1, num2) => {
    return num1 + num2;
  }, 0);
  cb(suma);
};

const copiarEach = (array, cb) => {
  // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
  // no tienes que devolver nada
  array.forEach((value) => cb(value));
};

const operacionMatematica = (n1, n2, cb) => {
  //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
  //Devolver la función pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
};

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  return array.filter((element) => {
    if (/[áa]/gi.test(element[0])) {
      return element;
    }
  });
}

/**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
  suma,
  sonIguales,
  tienenMismaLongitud,
  esPositivo,
  colors,
  fizzBuzz,
  devolverPrimerElemento,
  agregarItemAlFinalDelArray,
  nuevoUsuario,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  Persona,
  crearInstanciaPersona,
  sumarArray,
  copiarEach,
  operacionMatematica,
  filter,
};
