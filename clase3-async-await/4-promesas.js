// pendiente - completado - rechazado

const task = new Promise((resuelto, rechazado)=>{
    //acciones

    resuelto(2)
    // rechazado('Todo mal, me engaño como niño')
}) 

// task
//     .then(resultadoResuelto => { 
//         // throw new Error('Esto es un error de cód')
//         return  resultadoResuelto * 2
//     })
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(()=> console.log('finally'))

// Dividir con promesas

const dividir = (numero1, numero2) => {
    return new Promise((res, rej)=>{
        // acciones 
        if (numero2 === 0) {
            return rej('no se puede dividir por cero')
        }
        res(numero1/numero2)
    }) 
}

dividir(2,3)
    .then(result => console.log(result))
    .catch(error => console.log(error))
