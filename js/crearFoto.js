import { conexionAPI } from "./conexionAPI.js"

const formulario = document.querySelector("[data-formulario]")

function crearFoto(e) {

    e.preventDefault()
    const titulo = document.querySelector("[data-titulo]").value
    const precio = document.querySelector("[data-precio]").value
    const pathimagen = document.querySelector("[data-pathimagen]").value
}

    formulario.addEventListener("submit",e => crearFoto (e))