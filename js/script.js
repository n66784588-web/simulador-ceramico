// =============================
// 1. ESTADO GLOBAL
// =============================
let texturaActual = '';
let modoEdicion = 'piso';

const viewport = document.getElementById('viewport');

// =============================
// 2. LISTA DE PRODUCTOS
// =============================
const misProductos = [
    { nombre: "bremen-beige-30x60", marca: "nitropiso" },
    { nombre: "bremen-gris-30x60", marca: "nitropiso" },
    { nombre: "carrara-blanco-60x60", marca: "nitropiso" },

    { nombre: "harper-blanco-60x1.20", marca: "porcelanite" },
    { nombre: "balmor-blanco-60x60", marca: "porcelanite" },

    { nombre: "budapest-gris-61.2x61.2", marca: "vitromex" },
    { nombre: "chapala-miel-18x60", marca: "vitromex" },

    { nombre: "avenza-blanco-60x1.20", marca: "daltile" },
    { nombre: "melbourne-gray-45x90", marca: "daltile" },

    { nombre: "castor-blue-60x1.20", marca: "mise" },
    { nombre: "onice-scuro-60x60", marca: "mise" },

    { nombre: "avenue-beige-30x90", marca: "benadresa" },
    { nombre: "cascais-30x90", marca: "benadresa" }
];

// =============================
// 3. MOTOR DE RENDER
// =============================
function renderizarTextura() {

    if (!texturaActual) return;

    const canvasId = (modoEdicion === 'piso') ? 'floor-canvas' : 'wall-canvas';
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = texturaActual + '?t=' + Date.now();

    img.onload = () => {

        canvas.width = viewport.clientWidth;
        canvas.height = viewport.clientHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const ids = (modoEdicion === 'piso') 
            ? ['p1','p2','p3','p4'] 
            : ['p5','p6','p7','p8'];

        const pts = ids.map(id => {
            const el = document.getElementById(id);
            return {
                x: el.offsetLeft,
                y: el.offsetTop
            };
        });

        try {
            const src = [0, 0, img.width, 0, img.width, img.height, 0, img.height];
            const dst = [
                pts[0].x, pts[0].y,
                pts[1].x, pts[1].y,
                pts[2].x, pts[2].y,
                pts[3].x, pts[3].y
            ];

            const transform = PerspectiveTransform(src, dst);

            // 🔥 RESET
            canvas.style.transform = "none";

            // 🔥 APLICAR TRANSFORMACIÓN
            canvas.style.transform = transform.getCSS();
            canvas.style.transformOrigin = "0 0";

            // 🔥 MODO VISUAL (puedes cambiar a "normal" si no se ve bien)
            canvas.style.mixBlendMode = "multiply";

            ctx.drawImage(img, 0, 0);

        } catch (err) {
            console.error("Error en transformación:", err);
        }
    };
}

// =============================
// 4. INTERFAZ
// =============================
function setModo(modo) {
    modoEdicion = modo;
}

function cambiarHabitacion(archivo) {
    const bg = document.getElementById('bg-room');
    bg.src = 'img/habitaciones/' + archivo;

    if (texturaActual) {
        setTimeout(renderizarTextura, 100);
    }
}

// =============================
// 5. CATÁLOGO
// =============================
function mostrarProductos(marca) {

    const contenedor = document.getElementById('catalog-container');
    contenedor.innerHTML = '';

    const filtrados = misProductos.filter(p => 
        marca === 'todas' || p.marca === marca
    );

    filtrados.forEach(producto => {

        const ruta = `img/ceramicas/${producto.nombre}.jpg`;

        const card = document.createElement('div');
        card.className = 'tile-card';

        card.innerHTML = `
            <img src="${ruta}">
            <p>${producto.nombre}</p>
        `;

        card.onclick = () => {
            texturaActual = ruta;
            renderizarTextura();
        };

        contenedor.appendChild(card);
    });
}

// =============================
// 6. ARRASTRE DE PUNTOS
// =============================
document.querySelectorAll('.dot').forEach(dot => {

    dot.addEventListener('mousedown', function(e) {

        const rect = viewport.getBoundingClientRect();

        function mover(ev) {
            let x = ev.clientX - rect.left;
            let y = ev.clientY - rect.top;

            dot.style.left = x + 'px';
            dot.style.top = y + 'px';

            if (texturaActual) {
                renderizarTextura();
            }
        }

        function stop() {
            document.removeEventListener('mousemove', mover);
            document.removeEventListener('mouseup', stop);
        }

        document.addEventListener('mousemove', mover);
        document.addEventListener('mouseup', stop);
    });
});

// =============================
// 7. INICIO
// =============================
window.onload = () => {
    mostrarProductos('todas');
    setModo('piso');
};
