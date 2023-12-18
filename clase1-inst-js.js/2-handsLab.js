const mostrarLista = (elementosArray=[]) => {
    if (elementosArray.length === 0) return 'Lista vacía'
    elementosArray.forEach(elemento => console.log(elemento))
    return elementosArray.length
}   
// tdd
// pruebas 
if (mostrarLista() === 'Lista vacía') {
    console.log('prueba uno pasada, cero elementos')
}
if (mostrarLista([1,2,3]) === 3) {
    console.log('Prueba dos pasa')
}
// console.log()