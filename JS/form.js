document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form-registro").addEventListener('submit', checkNombre); 
    document.getElementById("form-registro").addEventListener('submit', checkApellido); 
    document.getElementById("form-registro").addEventListener('submit', checkTelefono); 
    document.getElementById("form-registro").addEventListener('submit', checkCorreo);
    document.getElementById("form-registro").addEventListener('submit', checkContrasena);  
  });

  function checkNombre(valor) {
    //valor.preventDefault();
    var nombre = document.getElementById('nombre').value;
    // Condicional que indica que error por no relleno del recuadro de ingreso de datos
    if(nombre.length == 0) {
      alert('Error - Campo nombre vacío');
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(nombre)) {
      alert("Error - Campo nombre (Ingrese solo letras)");
      document.getElementById("nombre").value = "";
      //nombre.focus();
      return false;
      }
    if(nombre.length <= 4 || nombre.length >= 30) {
        alert('Error - Campo nombre (Longitud entre 4 y 30 caracteres)');
        return true;
    }
    return false;
  }

  function checkApellido(valor) {
    //valor.preventDefault();
    var apellidos = document.getElementById('apellidos').value;
    if(apellidos.length == 0) {
      alert('Error - Campo apellidos vacío');
      return false;
    }
    if (!/^[a-zA-Z]*$/g.test(apellidos)) {
      alert("Error - Campo apellidos (Ingrese solo letras)");
      document.getElementById("apellidos").value = "";
      apellidos.focus();
      return false;
      }
    if(apellidos.length <= 4 || apellidos.length >= 30) {
        alert('Error - Campo apellidos (Longitud entre 4 y 30 caracteres)');
        return true;
    }
    return false;
  }

  function checkTelefono(valor) {
    //valor.preventDefault();
    var telefono = document.getElementById('telefono').value;
    if(telefono.length == 0) {
      alert('Error - Campo telefono vacío');
      return false;
    }
    if (!/^[0-9]+$/g.test(telefono)) {
      alert("Error - Campo telefono (Ingrese solo números)");
      document.getElementById("telefono").value = "";
      telefono.focus();
      return false;
      }
    if(telefono.length > 7) {
        alert('Error - Campo telefono (Longitud de 7 números)');
        return false;
    }
    return true;
  }

  function checkCorreo(valor) {
    //valor.preventDefault();
    var correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('Error - Campo correo vacío');
      return false;
    }
    if (!/^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/g.test(correo)) {
      alert("Error - Verifique que cumpla con la siguiente estructura 'usuario@correo.com'");
      document.getElementById("correo").value = "";
      correo.focus();
      return false;
    }
    return true;
  }

  function checkContrasena(valor) {
    //valor.preventDefault();
    var contrasena = document.getElementById('contrasena').value;
    if(contrasena.length == 0) {
      alert('Error - Campo Contraseña vacío');
      return false;
    }
    if (!/[a-z]/.test(contrasena) || !/[A-Z]/.test(contrasena) || !/[0-9]/.test(contrasena) || password.length <= 8) { 
      alert("Error - El campo 'Contraseña' no es correcto. Es obligatorio, mínimo 8 caracteres, y debe contener una mayúscula, una minúscula y un número");
      document.getElementById("contrasena").value = "";
      contrasena.focus();
      return false;
    }
    return true;
  }
/*
module.exports={
    checkNombre,checkApellido,checkTelefono,checkCorreo,checkContrasena
}*/