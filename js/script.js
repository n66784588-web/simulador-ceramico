// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
let texturaActual = 'img/ceramicas/acatlan-30x60.jpg'; 
let modoEdicion = 'piso'; 

// 2. BASE DE DATOS DE PRODUCTOS
const misProductos = [
    // --- NITROPISO ---
    { nombre: "acatlan-30x60", marca: "nitropiso" },
    { nombre: "alameda-60x60", marca: "nitropiso" },
    { nombre: "alhambra-gris-44x44", marca: "nitropiso" },
    { nombre: "alhambra-rojo-44x44", marca: "nitropiso" },
    { nombre: "altamira-33x33", marca: "nitropiso" },
    { nombre: "antigua-44x44", marca: "nitropiso" },
    { nombre: "aquismon-33x33", marca: "nitropiso" },
    { nombre: "arce-azul-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-azul-30x60", marca: "nitropiso" },
    { nombre: "arce-azul-60x60", marca: "nitropiso" },
    { nombre: "arce-blanco-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-blanco-30x60", marca: "nitropiso" },
    { nombre: "arce-blanco-60x60", marca: "nitropiso" },
    { nombre: "arce-cafe-19.5x89.5", marca: "nitropiso" },
    { nombre: "arce-cafe-30x60", marca: "nitropiso" },
    { nombre: "arce-cafe-60x60", marca: "nitropiso" },
    { nombre: "arezzo-beige-30x60", marca: "nitropiso" },
    { nombre: "arezzo-blanco-30x60", marca: "nitropiso" },
    { nombre: "arezzo-gris-30x60", marca: "nitropiso" },
    { nombre: "aspen-blanco-30x60", marca: "nitropiso" },
    { nombre: "aspen-rojo-30x60", marca: "nitropiso" },
    { nombre: "bremen-beige-30x60", marca: "nitropiso" },
    { nombre: "bremen-gris-30x60", marca: "nitropiso" },
    { nombre: "brest-30x60", marca: "nitropiso" },
    { nombre: "brookline-60x60", marca: "nitropiso" },
    { nombre: "bursera-gris-20x60", marca: "nitropiso" },
    { nombre: "cadiz-30x60", marca: "nitropiso" },
    { nombre: "calacatta-30x60", marca: "nitropiso" },
    { nombre: "cantera-cafe-30x60", marca: "nitropiso" },
    { nombre: "cantera-negro-30x60", marca: "nitropiso" },
    { nombre: "carrara-blanco-30x60", marca: "nitropiso" },
    { nombre: "carrara-blanco-60x60", marca: "nitropiso" },
    { nombre: "casa-blanca-60x60", marca: "nitropiso" },
    { nombre: "castellon-44x44", marca: "nitropiso" },
    { nombre: "cedral-beige-33x33", marca: "nitropiso" },
    { nombre: "coban-44x44", marca: "nitropiso" },
    { nombre: "concrete-gris-30x60", marca: "nitropiso" },
    { nombre: "copacabana-blanco-30x60", marca: "nitropiso" },
    { nombre: "copacabana-gris-3x60", marca: "nitropiso" },
    { nombre: "cuzcu-blanco-50x50", marca: "nitropiso" },
    { nombre: "cuzco-rojo-50x50", marca: "nitropiso" },
    { nombre: "diamante-blanco-30x60", marca: "nitropiso" },
    { nombre: "elegacnce-nieve-33x33", marca: "nitropiso" },
    { nombre: "grecia-30x60", marca: "nitropiso" },
    { nombre: "greytech-30x60", marca: "nitropiso" },
    { nombre: "hita-beige-59.5x59.5", marca: "nitropiso" },
    { nombre: "hita-blanco-59.5x59.5", marca: "nitropiso" },
    { nombre: "hita-gris-59.5x59.5", marca: "nitropiso" },
    { nombre: "huizache-cognac-33x33", marca: "nitropiso" },
    { nombre: "iguazu-miel-20x60", marca: "nitropiso" },
    { nombre: "iguazu-cafe-20x60", marca: "nitropiso" },
    { nombre: "ipana-45x90", marca: "nitropiso" },
    { nombre: "liverpool-44x44", marca: "nitropiso" },
    { nombre: "loreto-beige-50x50", marca: "nitropiso" },
    { nombre: "lublin-blanco-30x60", marca: "nitropiso" },
    { nombre: "lublin-rojo-30x60", marca: "nitropiso" },
    { nombre: "magna-60x60", marca: "nitropiso" },
    { nombre: "manchester-caoba-60x60", marca: "nitropiso" },
    { nombre: "manchester-chocolate-60x60", marca: "nitropiso" },
    { nombre: "marruecos-gris-30x60", marca: "nitropiso" },
    { nombre: "marruecos-rojo-30x60", marca: "nitropiso" },
    { nombre: "mazzaro-chocolate-20x60", marca: "nitropiso" },
    { nombre: "messel-30x60", marca: "nitropiso" },
    { nombre: "miranda-60x60", marca: "nitropiso" },
    { nombre: "monaco-rojo-30x60", marca: "nitropiso" },
    { nombre: "montecarlo-59.5x59.5", marca: "nitropiso" },
    { nombre: "mosset-30x60", marca: "nitropiso" },
    { nombre: "neiva-60x60", marca: "nitropiso" },
    { nombre: "olmo-rojo-20x60", marca: "nitropiso" },
    { nombre: "onice-beige-44x44", marca: "nitropiso" },
    { nombre: "parma-noce-44x44", marca: "nitropiso" },
    { nombre: "petra-beige-30x60", marca: "nitropiso" },
    { nombre: "petra-gris-30x60", marca: "nitropiso" },
    { nombre: "piedra-de-bernal-44x44", marca: "nitropiso" },
    { nombre: "piedra-de-rio-44x44", marca: "nitropiso" },
    { nombre: "piedra-porfirio-beige-44x44", marca: "nitropiso" },
    { nombre: "piedra-porfirio-rojo-44x44", marca: "nitropiso" },
    { nombre: "porto-30x60", marca: "nitropiso" },
    { nombre: "prado-gris-30x60", marca: "nitropiso" },
    { nombre: "prisma-beige-30x60-1.62", marca: "nitropiso" },
    { nombre: "prisma-beige-60x60-1.44", marca: "nitropiso" },
    { nombre: "prisma-gris-60x60-1.44", marca: "nitropiso" },
    { nombre: "prisma-negro-60x60-1.44", marca: "nitropiso" },
    { nombre: "quartz-gris-60x60-1.44", marca: "nitropiso" },
    { nombre: "quartz-negro-60x60-1.44", marca: "nitropiso" },
    { nombre: "rivalta-cafe-20x60-1.44", marca: "nitropiso" },
    { nombre: "rock-clover-60x60-1.44", marca: "nitropiso" },
    { nombre: "rock-clover-gris-60x60-1.44", marca: "nitropiso" },
    { nombre: "san-diego-50x50-1.75", marca: "nitropiso" },
    { nombre: "shangai-33x33-1.63", marca: "nitropiso" },
    { nombre: "sherezada-30x60-1.62", marca: "nitropiso" },
    { nombre: "steel-20x60-1.44", marca: "nitropiso" },
    { nombre: "steel-60x60-1.44", marca: "nitropiso" },
    { nombre: "steel-plate-60x60-1.44", marca: "nitropiso" },
    { nombre: "tamesi-beige-30x60-1.44", marca: "nitropiso" },
    { nombre: "tamesi-negro-30x60-1.44", marca: "nitropiso" },
    { nombre: "tamesi-rojo-30x60-1.44", marca: "nitropiso" },
    { nombre: "tamuin-beige-33x33-1.63", marca: "nitropiso" },
    { nombre: "tamuin-gris-33x33-1.63", marca: "nitropiso" },
    { nombre: "torino-60x60-1.44", marca: "nitropiso" },
    { nombre: "toulon-20x60-1.44", marca: "nitropiso" },
    { nombre: "tuxtla-44x44-1.74", marca: "nitropiso" },
    { nombre: "vancouver-blanco-60x60-1.44", marca: "nitropiso" },
    { nombre: "zacapa-44x44-1.74", marca: "nitropiso" },
    { nombre: "zurich-20x60-1.74", marca: "nitropiso" },

    // --- BENADRESA (Agrega tus modelos aquí) ---
    { nombre: "modelo-benadresa-ejemplo", marca: "benadresa" }
];

// 3. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    // Iniciar con Nitropiso por defecto
    mostrarProductos('nitropiso');

    // Manejo de los puntos interactivos
    const dots = document.querySelectorAll('.dot');
    let activeDot = null;

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

        // Redibujar perspectiva en tiempo real
        if (activeDot.classList.contains('dot-floor')) {
            dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
        } else {
            dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
        }
    });

    document.addEventListener('mouseup', () => activeDot = null);
});

// 4. FUNCIONES DE CATÁLOGO
function mostrarProductos(marca) {
    const contenedor = document.getElementById('catalog-container');
    if(!contenedor) return;
    contenedor.innerHTML = ''; 

    const filtrados = misProductos.filter(p => marca === 'todas' || p.marca === marca);

    filtrados.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'tile-card';
        const rutaImagen = `img/ceramicas/${prod.nombre}.jpg`;
        
        card.innerHTML = `
            <img src="${rutaImagen}" loading="lazy">
            <p>${prod.nombre.replace(/-/g, ' ')}</p>
        `;
        
        card.onclick = () => {
            texturaActual = rutaImagen;
            dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
            dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
        };
        contenedor.appendChild(card);
    });
}

// 5. FUNCIÓN DE CAMBIO DE HABITACIÓN
function cambiarHabitacion(archivo) {
    const bg = document.getElementById('bg-room');
    if(bg) bg.src = 'img/habitaciones/' + archivo;
    
    setTimeout(() => {
        dibujarPerspectiva('floor-canvas', ['p1','p2','p3','p4']);
        dibujarPerspectiva('wall-canvas', ['w1','w2','w3','w4']);
    }, 300);
}

// 6. FUNCIÓN MÁGICA: PERSPECTIVA
function dibujarPerspectiva(canvasId, dotIds) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const viewport = document.getElementById('viewport');

    const puntos = dotIds.map(id => {
        const dot = document.getElementById(id);
        return [
            (parseFloat(dot.style.left) / 100) * canvas.width,
            (parseFloat(dot.style.top) / 100) * canvas.height
        ];
    });

    const img = new Image();
    img.src = texturaActual;
    img.onload = () => {
        const p = new Perspective(ctx, img);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        p.draw([
            [puntos[0][0], puntos[0][1]],
            [puntos[1][0], puntos[1][1]],
            [puntos[2][0], puntos[2][1]],
            [puntos[3][0], puntos[3][1]]
        ]);
    };
}
