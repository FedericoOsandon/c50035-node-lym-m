let numerosArray  = [1,2,3,4,5]

// function myMap(array, callback) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         let nuevoValor = callback(array[i])
//         newArray.push(nuevoValor)        
//     }
//     return newArray
// }

// let nuevoArray = myMap(numerosArray, nro => nro * 2)


Array.prototype.miMap = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        let nuevoValor = callback(this[i])
        newArray.push(nuevoValor)        
    }
    return newArray
}

let nuevoArrayPrototype = numerosArray.miMap(nro => nro*2)
console.log(nuevoArrayPrototype)