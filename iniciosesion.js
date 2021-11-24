function validar2() {
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
  
    if (email.value.length == 0) {
      alert("⚠️Ingrese el correo⚠️")
      email.focus()
      return 0;
    }
  
    if (clave.value.length == 0) {
      alert("⚠️Ingrese la contraseña⚠️")
      clave.focus()
      return 0;
  
    }
  
    let credentials = {
      email: $("#email").val(),
      clave: $("#clave").val(),
    };
  
    $.ajax({
      type: 'GET',
      contentType: "application/json; charset=utf-8",
      dataType: 'JSON',
      
  
      url: "http://144.22.238.58:8080/api/user/" + credentials.email + "/" + credentials.clave,
  
      success: function (response) {
        if (response.name == 'NO DEFINIDO') {
          alert('❌ Usuario o contraseña incorrecta ❌');
          return;
        }
        console.log(response);
        console.log("Bienvenido");
        alert("✅ Acabas de iniciar sesion ✅");
        
      },
  
      error: function (jqXHR, textStatus, errorThrown) {
        
        alert("Usuario no registrado");
      }
    }
    );
  
  
  }