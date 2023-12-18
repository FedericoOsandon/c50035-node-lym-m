// destructuring 
// const propiedad1 = objeto.propiedad1
// const propiedad2 = objeto.propiedad2

// const {propiedad1 = propiedad1, propiedad2 = propiedad2  } = objeto

// const { propiedad1, propiedad2  } = objeto

// spread operator 

const objeto1 = {
    propiedad1: 1,
    propiedad2: 'b',
    propiedad: true
}

const objeto2 = {
    propiedad1: 'c',
    propiedad2: [1,2,3]
}

const  objeto3 = { ...objeto2, ...objeto1 }

console.log(objeto3) // {  }




