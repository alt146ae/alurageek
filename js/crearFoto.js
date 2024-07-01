import { conexionAPI } from "./conexionAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function crearFoto(e) {

    e.preventDefault()
    const titulo = document.querySelector("[data-titulo]").value
    const precio = document.querySelector("[data-precio]").value
    const pathimagen = document.querySelector("[data-pathimagen]").value
    await conexionAPI.crearFotos (titulo,precio,pathimagen)
      
}


    formulario.addEventListener("submit",e => crearFoto (e))
    //alert ("Imagen actualizada")


    