class TicketManager {
    #precioBaseDeGanancia = 0.15
    constructor(){
        this.eventos = []
    }

    getEventos(){
        return this.eventos
    }

    agregarEvento( nombre, lugar, precio, capacidad= 50, fecha= Date() ){
        const newEvento = {
            id: this.eventos.length + 1,
            nombre,
            lugar, 
            precio, 
            capacidad,
            fecha
        }
        this.eventos.push(newEvento)
        // return this.eventos
    }

    agregarUsuario({eid, uid}){
        // validación que existe el evento
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1 ) {
            return `El evento no existe`
        }
        // validar que en el evento no esté registrado el usuario
        const resultUser = this.eventos[eventoIndex].participantes.includes(uid) // true - false      
        if (resultUser) {
            return `El usuaiorio ya esta registrado en el evento`
        }

        this.eventos[eventoIndex].participantes.push(uid)
        return `El usuario fué registrado con éxito`
    }

    ponerEventoEnGira(eid, nuevaLocalidad, nuevaFecha){
        const eventoIndex = this.eventos.findIndex(evento => evento.id === eid)
        if (eventoIndex === -1) {
            return `No existe el evento`
        }

        const evento = this.eventos[eventoIndex]
        const newEvento = {
            ...evento,
            id: this.eventos.length + 1,
            lugar: nuevaLocalidad,
            fecha: nuevaFecha,
            participantes: []
        }
        this.eventos.push(newEvento)
        return `nuevo evento creado`
    }
}

const ticketManager = new TicketManager()
console.log(ticketManager.agregarEvento('evento uno', 'Rg', 1500))
console.log(ticketManager.agregarEvento('evento dos', 'Rg', 1500))
console.log(ticketManager.agregarEvento('evento tres', 'Rg', 1500))
console.log(ticketManager.agregarEvento('evento cuatro', 'Rg', 1500))
console.log(ticketManager.getEventos())