
class Registro {
    constructor(nombre, accesorio, cantidad , telefono, correo) {
        this.nombre = nombre;
        this.accesorio = accesorio;
        this.cantidad = cantidad;
        this.telefono = telefono;
        this.correo = correo;
    }
}

let formRegistro = document.getElementById('formRegistro')
let botonRegistro = document.getElementById('botonRegistro')
let divRegistro = document.getElementById('divRegistro')
let botonAdmin = document.getElementById('botonAdmin')
let divAdmin = document.getElementById('divAdmin')


let registros = []

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = document.getElementById('nombre').value
    let accesorio = document.getElementById('accesorio').value
    let cantidad = document.getElementById('cantidad').value
    let telefono = document.getElementById('number').value
    let correo = document.getElementById('email').value
    let precio
    let codigo

    const registro = new Registro(nombre, accesorio, cantidad , telefono, correo)
    
    accesorio === "Correa" || accesorio === "Placa ID" ? precio = 70 : precio = 40 
    
    const registroIntermedio = {
        ...registro,
        total: cantidad * precio,
    }

    const {total} = registroIntermedio
    codigo = `A${accesorio}-C${cantidad}-T${total}`

    const registroFinal = {
        ...registroIntermedio,
        codigo: codigo
    }

    registros.push(registroFinal)

    formRegistro.reset()
})

botonRegistro.addEventListener('click', () => {
    if(registros.length !== 0) {
        divRegistro.innerHTML = "<h3>Solicitudes enviadas</h3>"
        registros.forEach((registro , indice) => {
            divRegistro.innerHTML += `
                <div class="card" id="registro${indice}" style="width: 18rem;">
                    <h5 class="card-header">
                    Número de compra: 000${indice + 1}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Nombre: ${registro.nombre}</li>
                        <li class="list-group-item">Correo: ${registro.correo}</li>
                        <li class="list-group-item">Telefono: ${registro.telefono}</li>
                        <li class="list-group-item">Accesorio: ${registro.accesorio}</li>
                        <li class="list-group-item">Cantidad: ${registro.cantidad}</li>
                        <li class="list-group-item">Total: S/ ${registro.total}.00</li>
                    </ul>
                </div>
            
            `
        })
    } else {
        divRegistro.innerHTML = "No se agrego ningun registro"
    }
})

botonAdmin.addEventListener('click', () => {
    if(registros.length !== 0) {
        divAdmin.innerHTML = `<h3>Registros de compras:</h3>`
        registros.forEach((registro) => {
            divAdmin.innerHTML += `
                        <li class="list-group-item">Nombre: ${registro.codigo}</li>
            `
        })
    } else {
        divAdmin.innerHTML = "No se agrego ningun registro"
    }
})

