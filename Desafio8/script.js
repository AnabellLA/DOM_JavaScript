/*Bandanas*/

let divBandanas = document.getElementById('divBandanas')

if(divBandanas !== null) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto =>{
            divBandanas.innerHTML += `
            <div id="${producto.id}" class="clase__main__producto__inicio__filtro__lista__P">
                <img src=${producto.imagen} alt="bandana_${producto.id}">
                <p class="clase__main__producto__inicio__filtro__lista__P__titulo">${producto.nombre}</p>
                <p class="clase__main__producto__inicio__filtro__lista__P__detalle">Talla ${producto.talla}</p> 
                <p class="clase__main__producto__inicio__filtro__lista__P__precio">S/ ${producto.precio}.00</p>
            </div>
        `
        })
})
}else{
        /*Hazlo tu mismo*/
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

        let registros = []

        if(localStorage.getItem('Registro')) {
            registros = JSON.parse(localStorage.getItem('Registro'))
        } else {
            localStorage.setItem('Registro', JSON.stringify(registros))
        }

        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault()

            let accesorio = document.getElementById('accesorio').value
            let talla = document.getElementById('talla').value
            let nombre = document.getElementById('nombre').value
            let correo = document.getElementById('email').value
            let telefono = document.getElementById('number').value

            const registro = new Registro(accesorio, talla, nombre, correo, telefono)
            registros.push(registro)
            
            localStorage.setItem('Registros', JSON.stringify(registros))
            formRegistro.reset()

        })
    }
