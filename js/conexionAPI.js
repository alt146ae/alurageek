async function listarFotos (){
    const conexion = await fetch ("https://my-json-server.typicode.com/alt146ae/alura-geek-api/fotos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}

async function crearFotos (titulo,precio,imagenpath){
    const conexion = await fetch ("https://my-json-server.typicode.com/alt146ae/alura-geek-api/fotos",{
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
////eliminar fotos /////

async function eliminarFoto(id) {
  const conexion = await fetch(`https://my-json-server.typicode.com/alt146ae/alura-geek-api/fotos/${id}`, {
      method: "DELETE"
  });
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}


////////////////////////
export const conexionAPI ={
    listarFotos, crearFotos, 
    eliminarFoto
}

