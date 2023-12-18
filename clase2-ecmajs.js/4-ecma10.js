// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")
// import { Calculadora } from  ("./caluladora.js")

// trim
// let nombre = '    Fede Augusto     '
// console.log(nombre.length)
// console.log(nombre.trim().length)


// flat para aplanar array
// const array = [ 1, 2, [3,4], [5, [6,[7]]], 8,9,10]
// console.log(array.flat(3))

// importación dináminca

// import  React from 'react' ->type  module
// const React = require('react) -> type commond
// const fs = require('node:fs')

const modo = 'otra cosa' 

const sumarNumeros = async () => {
    if (modo === 'cálculo') {
        const { Calculadora } = await import('./calculadora.js')
        let calculadora = new Calculadora()
        console.log(calculadora.suma(3,5))
    }
}
sumarNumeros()

// module j s

