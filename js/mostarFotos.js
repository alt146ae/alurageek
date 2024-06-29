import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(titulo,precio,path) {
    const fotos = document.createElement("li");
    fotos.className = "card__item"
    fotos.innerHTML = `<img src="${path}" class="img" alt="logo canal alura">
                    <div class="descripcion-card">
                        <h3 class="item item1">${titulo}</h3>
                        <p class="item item2">${precio}</p>
                        <img src="./img/card/trash.png" class="item item3" alt="eliminar" </div>`
    return fotos
}

async function listarfotos (){
    const listAPI = await conexionAPI.listarFotos()
    listAPI.forEach(fotos => lista.appendChild(crearCard(fotos.titulo, fotos.precio, fotos.imagenpath)));
}

listarfotos ()