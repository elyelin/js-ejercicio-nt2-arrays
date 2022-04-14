console.log('2.- Funciones de alto orden')

const saludar = (function (){
  var mensaje = "Hola mundo"

  console.log(mensaje)

  function saludando(){
    console.log(`Mensaje a mostrar: ${mensaje}`)
  }

  return saludando
})()


console.log(typeof saludar)

saludar()

const counter = (function(){
  let contador = 0

  return {
    showContador: function(){
      console.log(contador)
    },
    sum: (num) => contador += num,
    inc: () => contador++,
    dec: () => contador--,

  }

})()

console.log(counter, typeof counter)
counter.showContador()
counter.sum(10)
counter.showContador()
counter.inc()
counter.inc()
counter.inc()
counter.showContador()



console.log("******* ")



