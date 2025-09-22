// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputField = document.getElementById('amigo');
    const nombre = inputField.value.trim();

    // Validación para asegurarse de que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Crear el elemento <li> para el nombre y agregarlo a la lista
    const li = document.createElement('li');
    li.textContent = nombre;
    document.getElementById('listaAmigos').appendChild(li);

    // Limpiar el campo de entrada después de agregar el nombre
    inputField.value = '';
}

// Función para realizar el sorteo
function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    
    // Verificar si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert('¡No hay amigos en la lista! Agrega al menos un nombre.');
        return;
    }

    // Convertir la NodeList en un array
    const amigosArray = Array.from(listaAmigos);

    // Elegir un amigo al azar
    const amigoAleatorio = amigosArray[Math.floor(Math.random() * amigosArray.length)];

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores
    const liResultado = document.createElement('li');
    liResultado.textContent = `¡El amigo secreto es: ${amigoAleatorio.textContent}!`;
    resultado.appendChild(liResultado);
}
