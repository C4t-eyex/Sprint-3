globalThis.registros = [];

function agregarRegistro() {
    function usuario(nombre,apellido,telefono,correo,contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    var nomHtml = document.getElementById("nombre").value;
    var apellHtml = document.getElementById("apellido").value;
    var telHtml = document.getElementById("telefono").value;
    var corHtml = document.getElementById("correo").value;
    var contHtml = document.getElementById("contrasena").value;

    let newusuario = new usuario(nomHtml, apellHtml, telHtml, corHtml,contHtml);
    registros.push (newusuario);
};

function ordenarArreglo(arreglo) {
    arreglo.sort((a,b) => {return a.apellido.localeCompare(b.apellido);});
    console.log (arreglo);
    return arreglo;

};

function filtrarCorreo(arreglo){
    let filtro = arreglo.filter((userRegistro) => {
        if (userRegistro.correo.includes("gmail.com")){
            return userRegistro;
        } 
    });
    console.log(filtro);
    return filtro;

};

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro =  agregarRegistro;