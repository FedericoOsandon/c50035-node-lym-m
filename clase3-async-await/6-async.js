function escribirArchivo(texto, callback){
    console.log(texto)
    setTimeout(()=>{
        callback()
    })
}

console.log('Inicio del programa')

escribirArchivo('Texto de escribir archivo', ()=>{
    console.log('terminé de escribir el archivo')
})

console.log('Fin del programa')