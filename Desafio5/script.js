class Registro {
    constructor(accesorio, talla, nombre, correo, telefono) {
        this.accesorio = accesorio;
        this.talla = talla;
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
    }
}

let formRegistro = document.getElementById('formRegistro')
let botonRegistro = document.getElementById('botonRegistro')
let divRegistro = document.getElementById('divRegistro')

let registros = []

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()

    let accesorio = document.getElementById('accesorio').value
    let talla = document.getElementById('talla').value
    let nombre = document.getElementById('nombre').value
    let correo = document.getElementById('email').value
    let telefono = document.getElementById('number').value

    const registro = new Registro(accesorio, talla, nombre, correo, telefono)
    registros.push(registro)

    console.log(registros.length)
    formRegistro.reset()
})

botonRegistro.addEventListener('click', () => {
    if(registros.length !== 0) {
        divRegistro.innerHTML = "<h3>Solicitudes enviadas</h3>"
        registros.forEach((registro , indice) => {
            divRegistro.innerHTML += `
                <div class="card" id="registro${indice}" style="width: 18rem;">
                    <h5 class="card-header">
                    ${registro.nombre}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Accesorio: ${registro.accesorio}</li>
                        <li class="list-group-item">Talla: ${registro.talla}</li>
                        <li class="list-group-item">Correo: ${registro.correo}</li>
                        <li class="list-group-item">telefono: ${registro.telefono}</li>
                    </ul>
                </div>
            
            `
        })
    } else {
        divRegistro.innerHTML = "No se agrego ningun registro"
    }
    
})