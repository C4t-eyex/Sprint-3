//const { registros } = require("../Desktop/UPB/Ciclo 3/Github/Sprint/Sprint-3/JS/registro");

//globalThis.registros = [];

globalThis.registros = [
    {nombre: 'juan', apellido: 'calle', telefono: '123456', correo: 'juan@gmail.com', contrasena: 'Password123'},
    {nombre: 'Miguel', apellido: 'Torres', telefono: '123456', correo: 'miguel@gmail.com', contrasena: 'Password123'},
    {nombre: 'Angel', apellido: 'Garces', telefono: '123456', correo: 'angel@hotmail.com', contrasena: 'Password123'},
    {nombre: 'Carlos', apellido: 'Diaz', telefono: '123456', correo: 'carlos@gmail.com', contrasena: 'Password123'},
];

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

ordenarArreglo(registros);


/*module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro =  agregarRegistro;*/