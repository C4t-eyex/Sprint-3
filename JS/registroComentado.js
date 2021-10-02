//const { registros } = require("../Desktop/UPB/Ciclo 3/Github/Sprint/Sprint-3/JS/registro");

globalThis.registros = [];

function agregarRegistro() {
    function usuario(nombre,apellidos,telefono,correo,contrasena){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    var nomHtml = document.getElementById("nombre").value;
    var apellHtml = document.getElementById("apellidos").value;
    var telHtml = document.getElementById("telefono").value;
    var corHtml = document.getElementById("correo").value;
    var contHtml = document.getElementById("contrasena").value;

    let newusuario = new usuario(nomHtml, apellHtml, telHtml, corHtml,contHtml);
    registros.push (newusuario);

    // {
    //     "nombre": "Marta",
    //     "apellido": "Perez",
    //     "telefono": "1234567",
    //     "correo": "martica@gmail.com",
    //     "contrasena": "Martica123"
    // }
    
    /*for(var i=0;i<5;i++){
        registros[i] = document.getElementsByClassName("inputs"+(i+1)).value;
    }
    for(i=0;i<registros.length;i++){
        // console.log(registros[i]);
        return registros;
    }*/
};

function ordenarArreglo(arreglo) {
    arreglo.sort((a,b) => {return a.apellido.localeCompare(b.apellido);});
    console.log (arreglo);
    return arreglo;

    /*const apellidoA = a.apellido.toLowerCase();
        const apellidoB = b.apellido.toLowerCase();
        if(apellidoA < apellidoB){
            return -1;
        }
        if(apellidoA > apellidoB){
            return 1;
        }
    return registros; // En ese caso retornarian el arreglo*/
};

function filtrarCorreo(arreglo){
    let filtro = arreglo.filter((userRegistro) => {
        if (userRegistro.correo.includes("gmail.com")){
            return userRegistro;
        } 
    });
    console.log(filtro);
    return filtro;

    /*let filtro = "gmail.com";
    let filtroRegexp = RegExp(filtro);
    resultado = arreglo.filter(arreglo => filtroRegexp.test(arreglo.correo) === true);*/
};


module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro =  agregarRegistro;