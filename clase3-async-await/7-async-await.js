const dividir = (numero1, numero2) => {
    return new Promise((res, rej)=>{
        // acciones 
        if (numero2 === 0) {
            return rej('no se puede dividir por cero')
        }
        res(numero1/numero2)
    }) 
}

// dividir(2,3)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

const operacion = async () => { 
    try {
        const result = await dividir(10,0)
        const result2 = result * 5
        console.log(result2)
        console.log(result)
    } catch (error) {
        console.log(error)
    }    
}

operacion()
    // async await swgar syntax promesas
