// const sumar       = (numero1, numero2) => numero1 + numero2
// const restar      = (numero1, numero2) => numero1 - numero2
// const multiplicar = (numero1, numero2) => numero1 * numero2
const dividir     = (argError, numero1, numero2) => argError === 'error' ? 'no se puede dividir por cero' : numero1 / numero2 // numero2 === 0-> error -> infinity

const realizarOperaciones = (numero1, numero2, callback) => {
    console.log('VAmos a realizar la operación, que no se cual es')
    // acciones
    if (numero2 === 0) {
        return callback('error', numero1, numero2)
    } 
    return callback(null ,numero1, numero2)
   
}

console.log(realizarOperaciones(5,1, dividir))
// realizarOperaciones(2,5, restar)
// realizarOperaciones(2,5, multiplicar)
// realizarOperaciones(2,5, dividir)