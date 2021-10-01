let registros = []

function ordenarArreglo(a,b) {
    registros.sort((a,b) => {
        const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();
        if(apellidoA < apellidoB){
            return -1;
        }
        if(apellidoA > apellidoB){
            return 1;
        }
        return 0;
    });
    console.log(registros[i]);
};

function filtrarCorreo(registros){
    let filtro = "gmail.com";
    let filtroRegexp = RegExp(filtro);
    resultado = registros.filter(registros => filtroRegexp.test(registro.correo) === true);
    
    return console.log(registros[i]);
};

function agregarRegistro(registros) {
    for(var i=0;i<5;i++){
        registros[i] = document.getElementsByClassName("inputs"+(i+1)).value;
    }
    for(i=0;i<registros.length;i++){
        console.log(registros[i]);
    }
};
module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro =  agregarRegistro;