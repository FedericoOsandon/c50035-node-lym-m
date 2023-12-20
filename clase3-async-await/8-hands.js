const suma = (numero1, numero2) => {
    return new Promise((res, rej)=>{ 
        if (numero1 === 0 || numero2===0) rej('Operación innecesaria')
        if ((numero1 + numero2 ) < 0) rej('Solo operaciones positivas')
        res(numero1 + numero2)
    })
}
const resta = (numero1, numero2) => {
    return new Promise((res, rej)=>{ 
        if (numero1 === 0 || numero2===0) rej('Operación innecesaria')
        if ((numero1 - numero2 ) < 0) rej('Solo operaciones positivas')
        res(numero1 - numero2)
    })
}

const calculos = async () => {
    try {
        let numero1 = 5
        let numero2 = 5
        let sumaResult = await suma(numero1, numero2)
        console.log(sumaResult)

        let restaResult = await resta(numero1, numero2)
        console.log(restaResult)




    } catch (error) {
        console.log(error)
    }
}

calculos()