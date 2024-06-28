async function listarFotos (){
    const conexion = await fetch ("http://localhost:3001/fotos");
    const conexionConvertida = conexion.json();
    //console.log(conexionConvertida);
    return conexionConvertida
}

//listarFotos ()
export const conexionAPI 