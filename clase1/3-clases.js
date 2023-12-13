// closure

// function crearContador() {
//     let contador = 0

//     return () => {
//         contador++
//         contador.log(contador)
//     }
// }

// let miContador1 = crearContador()
// miContador1()
// miContador1()
// miContador1()

// clases -> esc6 sugar syntax
// molde 

const personaFede = {
    nombre: 'Federico',
    apellido: 'Osandón',
    email: 'f@gmail.com'
}
const personaJuan = {
    nombre: 'Juan',
    apellido: 'Peréz',
    email: 'p@gmail.com'
}

class Persona {
    constructor(nombre, apellido, email){
        this.nombre   = nombre
        this.apellido = apellido
        this.email    = email
    }
    static raza = 'humano'

    saludando(){
        return 'Hola como están'
    }

    presentarse(){
        return `Mi nombre es ${this.nombre} - ${this.apellido}`
    }

    static emitirSonido(){
        return 'haaaaaaaaaaaaaaaa'
    }
}

// console.log() - Console - Math - Array - Date - Object
// instanciar 
const persona1 = new Persona('Federico', 'Osandón', 'f@gmail.com')
const persona2 = new Persona('Juan', 'Pérez', 'p@gmail.com')
const persona3 = new Persona('Laura', 'Martinez', 'm@gmail.com')


console.log(persona1.nombre)
console.log(persona2.apellido)
console.log(persona3.email)
console.log(persona1.saludando())
console.log(persona1.presentarse())
console.log(Persona.raza)
console.log(Persona.emitirSonido())
console.log(Date.now())


