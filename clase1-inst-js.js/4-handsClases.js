class Contador {
    constructor(responsable){
        this.responsable = responsable
        this.contador = 0
    }
    static contadorGlobal = 0

    contar(){
        this.contador++
        Contador.contadorGlobal++
    }

    getResponsable(){
        return this.responsable
    }

    getCuentaIndividual(){
        return this.contador
    }

    getCuentaGlobal(){
        return Contador.contadorGlobal
    }

}

const contadorDeFede  = new Contador('Federico')
const contadorDeLucas = new Contador('Lucas') 

contadorDeFede.contar()
contadorDeFede.contar()
contadorDeFede.contar()
contadorDeLucas.contar()
contadorDeLucas.contar()
contadorDeLucas.contar()
console.log(Contador.contadorGlobal)
console.log(contadorDeFede.getCuentaIndividual())
console.log(contadorDeLucas.getCuentaIndividual())
console.log(contadorDeLucas.getResponsable())

