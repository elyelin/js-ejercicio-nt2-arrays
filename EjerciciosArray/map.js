/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique si puede
 *  entrar o no en un casino (Solo los mayores de 21 anios pueden entrar)
 */
const MINIMA = 21;
const array = [
  {
    nombre: 'Alejandra',
    apellido: 'Perez',
    edad: 25,
  },
  {
    nombre: 'Jezza',
    apellido: 'Gonzales',
    edad: 19,
  },
  {
    nombre: 'Eduardo',
    apellido: 'Perez',
    edad: 25,
  },
];

console.log('MI EJERCICIO');

//Map
const filtrado = array.map(function (x) {
  // (x) => (x.edad >= MINIMA ? (x.allowd = true) : (x.allowd = false))
  if (x.edad >= MINIMA) {
    x.allowd = true;
    return x;
  }
});
//console.log(filtrado);
