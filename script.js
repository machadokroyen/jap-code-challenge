document.addEventListener("DOMContentLoaded", function(){

    /* elementos de la página */
    const btn = document.getElementById("boton");
    const name = document.getElementById("nombre");
    const lasname = document.getElementById("apellido");
    const date = document.getElementById("fecha");
    
    btn.addEventListener("click", function () {
        const datos = {
            nombre: name.value,
            apellido: lasname.value,
            fechaDeNacimiento: date.value
          };
        
        fetch("https://jsonplaceholder.typicode.com/users",  {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
        })
        .catch(error => {
        console.error('Error:', error);
        });
    })
})