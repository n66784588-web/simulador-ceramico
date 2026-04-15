document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    let activeDot = null;

    // 1. Lógica para mover los puntos
    dots.forEach(dot => {
        dot.addEventListener('mousedown', () => activeDot = dot);
    });

    document.addEventListener('mousemove', (e) => {
        if (!activeDot) return;
        const rect = document.getElementById('viewport').getBoundingClientRect();
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        let y = ((e.clientY - rect.top) / rect.height) * 100;
        
        activeDot.style.left = Math.max(0, Math.min(100, x)) + '%';
        activeDot.style.top = Math.max(0, Math.min(100, y)) + '%';
        
        dibujarPiso(); // Redibuja cada vez que mueves un punto
    });

    document.addEventListener('mouseup', () => activeDot = null);

    // 2. Iniciar catálogo (Asegúrate de poner tus nombres reales aquí)
    mostrarProductos('todas');
});

// Función para cambiar la foto de la habitación
function cambiarHabitacion(archivo) {
    document.getElementById('bg-room').src = 'img/habitaciones/' + archivo;
    // Opcional: podrías mover los puntos a posiciones predefinidas para cada cuarto aquí
}

// Función para filtrar marcas
function mostrarProductos(marca) {
    const contenedor = document.getElementById('catalog-container');
    contenedor.innerHTML = ''; 
    
    // Ejemplo de cómo llenar tu lista. Repite para tus 59 fotos:
    const misFotos = [
        {nombre: "parma-noce-44x44.jpg", marca: "porcelanite"},
        {nombre: "daltile-gris.jpg", marca: "daltile"},
        // ... agrega las demás
    ];

    misFotos.forEach(foto => {
        if (marca === 'todas' || foto.marca === marca) {
            const card = document.createElement('div');
            card.className = 'tile-card';
            card.innerHTML = `<img src="img/ceramicas/${foto.nombre}"><p>${foto.nombre}</p>`;
            card.onclick = () => console.log("Elegiste: " + foto.nombre);
            contenedor.appendChild(card);
        }
    });
}

// Esta función es la que hará la magia de la perspectiva después
function dibujarPiso() {
    console.log("Calculando perspectiva...");
}
