// 1. VARIABLES GLOBALES
let texturaActual = 'img/ceramicas/parma-noce-44x44.jpg'; // Imagen inicial
let modoEdicion = 'piso'; // Controla si pintamos suelo o pared

document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    let activeDot = null;

    // 2. LÓGICA DE MOVIMIENTO DE PUNTOS
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

        // Redibujamos según qué punto estés moviendo
        if (activeDot.classList.contains('dot-floor')) {
            dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
        } else {
            dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
        }
    });

    document.addEventListener('mouseup', () => activeDot = null);

    // Iniciar catálogo y dibujo inicial
    mostrarProductos('todas');
});

// 3. LA FUNCIÓN MÁGICA: DIBUJAR PERSPECTIVA
function dibujarPerspectiva(canvasId, dotIds) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const viewport = document.getElementById('viewport');
    
    // Ajustar canvas al tamaño real que se ve en pantalla
    canvas.width = viewport.clientWidth;
    canvas.height = viewport.clientHeight;

    const imgTile = new Image();
    imgTile.src = texturaActual; 
    
    imgTile.onload = () => {
        // Usamos la librería Perspective.js cargada en el HTML
        const p = new Perspective(ctx, imgTile);
        
        const puntos = dotIds.map(id => {
            const dot = document.getElementById(id);
            return [
                (parseFloat(dot.style.left) / 100) * canvas.width,
                (parseFloat(dot.style.top) / 100) * canvas.height
            ];
        });

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // p.draw( [arriba-izq, arriba-der, abajo-der, abajo-izq] )
        p.draw([
            [puntos[0][0], puntos[0][1]], 
            [puntos[1][0], puntos[1][1]], 
            [puntos[2][0], puntos[2][1]], 
            [puntos[3][0], puntos[3][1]]
        ]);
    };
}

// 4. CAMBIAR HABITACIÓN
function cambiarHabitacion(archivo) {
    document.getElementById('bg-room').src = 'img/habitaciones/' + archivo;
    // Damos un pequeño tiempo para que cargue la foto de fondo y redibujamos la cerámica
    setTimeout(() => {
        dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
        dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
    }, 200);
}

// 5. CATÁLOGO DINÁMICO
function mostrarProductos(marca) {
    const contenedor = document.getElementById('catalog-container');
    contenedor.innerHTML = ''; 
    
    // Aquí pon los nombres reales de tus 59 archivos .jpg
    const misFotos = [
        {nombre: "parma-noce-44x44.jpg", marca: "porcelanite"},
        {nombre: "daltile-gris.jpg", marca: "daltile"}
    ];

    misFotos.forEach(foto => {
        if (marca === 'todas' || foto.marca === marca) {
            const card = document.createElement('div');
            card.className = 'tile-card';
            card.innerHTML = `<img src="img/ceramicas/${foto.nombre}"><p>${foto.nombre}</p>`;
            
            card.onclick = () => {
                texturaActual = `img/ceramicas/${foto.nombre}`;
                // Aplicamos la foto elegida al modo que esté activo
                if(modoEdicion === 'piso') {
                    dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
                } else {
                    dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
                }
            };
            contenedor.appendChild(card);
        }
    });
}
