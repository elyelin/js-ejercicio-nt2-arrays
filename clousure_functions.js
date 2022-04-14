console.log("****** Clousure ******")

function helloFunction(){

  var mensaje = "Hola mundo"
  var edad = 18
  var pais = 'Argentina'


  function getMensaje(){
    return mensaje
  }

  function getEdad(){
    return edad
  }

  function saludar(){
    console.log(mensaje)
  }
  
  
  //return saludar

  return {
    getMensaje,
    getEdad,
    tipo: 'tipo',
    country: pais 
  }
}

//console.log(typeof mensaje)
const clousure = helloFunction()

console.log(typeof clousure, clousure)
console.log(clousure.country)
console.log(clousure.tipo)

console.log(clousure.getEdad())
