let user = {
    nombre: prompt("Ingrese su nombre, por favor")
}
parrafo1.innerText = `Bienvenido ${user.nombre}, nuestras bandanas son de la mejor calidad para nuestros engreídos.`

class Bandana {
    constructor(id, nombre, precio, talla, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.talla = talla;
        this.imagen = imagen;
    }

}

const banadana1 = new Bandana(1,"Bandana Dulce o Caca", 40, "Small", "./assests/pic_1.jpg")
const banadana2 = new Bandana(2,"Bandana Trick or Treat", 40, "Medium", "./assests/pic_2.jpg")
const banadana3 = new Bandana(3,"Bandana Kid's Nightmare", 40, "Large", "./assests/pic_3.jpg")
const banadana4 = new Bandana(4,"Bandana I smell Children", 40, "X-Large", "./assests/pic_4.jpg")

const bandanas = [banadana1, banadana2, banadana3, banadana4]

let divBandanas = document.getElementById('divBandanas')

bandanas.forEach(bandanaEnArray => {
    divBandanas.innerHTML += `
        <div id="${bandanaEnArray.id}" class="bandanas">
            <img class="img" src=${bandanaEnArray.imagen}>
            <p> Nombre: ${bandanaEnArray.nombre}</p>
            <p> Precio: S/ ${bandanaEnArray.precio}.00</p>
            <p> Talla: ${bandanaEnArray.talla}</p>
            <input type="button" value="Comprar">
        </div>
    `
})
