const productos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
]

let arrayProductos = []
productos.forEach(objeto => {
    const keysArray = Object.keys(objeto)
    keysArray.forEach( key => {
        if(!arrayProductos.includes(key)) arrayProductos.push(key)
    })
})
console.log(arrayProductos)
