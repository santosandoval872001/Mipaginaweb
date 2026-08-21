const formulario = document.getElementById("formContacto");

formulario.addEventListener("submit", function (event) { 
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;

    if (
        nombre === "" ||
        correo === "" ||
        servicio === "" ||
        mensaje === ""
    ) { 
        alert("Por favor completa todos los campos.");
        return;
    }

    // console.log("Nombre: ", nombre);
    // console.log("Correo: ", correo);
    // console.log("Servicio:", servicio);
    // console.log("Mensaje: ", mensaje);

    //Crear mensaje

        const texto = `Hola SanSupport 👋

Mi nombre es: ${nombre}

Mi correo es: ${correo}

Estoy interesado en: ${servicio}

Mi proyecto consiste en:
${mensaje}`


    // Numero de whatsapp de SanSupport

    const telefono = "523751112113";

    //Crear el enlace a whatsapp

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
})