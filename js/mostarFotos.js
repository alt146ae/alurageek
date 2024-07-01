import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")


function crearCard(id, titulo, precio, path) {
    const fotos = document.createElement("li");
    fotos.className = "card__item"
    fotos.innerHTML = `<img src="${path}" class="img" alt="logo canal alura">
                    <div class="descripcion-card">
                        <h3 class="item item1">${titulo}</h3>
                        <p class="item item2">${precio}</p>
                        <img src="./img/card/trash.png" class="item item3" alt="eliminar" data-id="${id}"</div>`

  

    ///////////////////////////////////////////////
    const botonEliminar = fotos.querySelector(".item3");
    botonEliminar.addEventListener("click", async () => {
        const idFoto = botonEliminar.getAttribute("data-id");
        try {
            await conexionAPI.eliminarFoto(idFoto);
            fotos.remove(); // Eliminar visualmente la tarjeta de la lista
            console.log(`Foto con ID ${idFoto} eliminada.`);
        } catch (error) {
            console.error("Error al eliminar la foto:", error);
        }
    });



    ////////////////////////////////////////////

    return fotos

}
//////////////////eliminar foto//////////////




//////////////////////////////////////////////////////////////

async function listarfotos() {
    const listAPI = await conexionAPI.listarFotos();

    if (listAPI.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No se han agregado productos.";
        mensaje.className = "mensaje-vacio";
        lista.appendChild(mensaje);
    } else {
        listAPI.forEach(fotos => lista.appendChild(crearCard(fotos.id, fotos.titulo, fotos.precio, fotos.imagenpath)));
    }
}

listarfotos()


