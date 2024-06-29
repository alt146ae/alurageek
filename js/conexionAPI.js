async function listarFotos (){
    const conexion = await fetch ("http://localhost:3001/fotos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}

async function crearFotos (titulo,precio,imagenpath){
    const conexion = await fetch ("http://localhost:3001/fotos",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({
        titulo:titulo,
        precio:precio,
        imagenpath:imagenpath,
      })
    })
    const conexionConvertida = conexion.json()  
    return conexionConvertida
}

export const conexionAPI ={
    listarFotos, crearFotos
}

