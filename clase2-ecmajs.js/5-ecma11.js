// operador nullish
let varibleCondicion1 = 0 // -> 0 es falso
let varibleCondicion2 = '' // '' es falso
let varibleCondicion3 = false

let pruebaCondition1 = varibleCondicion1 || 'sin valor' // or -> o
let pruebaCondition2 = varibleCondicion2 || 'sin valor' // or -> o
let pruebaCondition3 = varibleCondicion3 || 'sin valor' // or -> o

let pruebaCondition4 = varibleCondicion1 ?? 'sin valor' // or -> o
let pruebaCondition5 = varibleCondicion2 ?? 'sin valor' // or -> o
let pruebaCondition6 = varibleCondicion3 ?? 'sin valor' // or -> o

console.log(pruebaCondition1)
console.log(pruebaCondition2)
console.log(pruebaCondition3)
console.log('_______________')
console.log(pruebaCondition4)
console.log(pruebaCondition5)
console.log(pruebaCondition6)

// variables privadas

class Persona {
    #apellido='osandon'
    constructor(name, email){
        this.name = name
        this.email = email
        this.fullName = `${this.name} ${this.#apellido}`
    }

    getName(){
        return this.fullName
    }
}

const persona = new Persona('federico', 'f@gmail.com')

console.log(persona.name)
console.log(persona.fullName)