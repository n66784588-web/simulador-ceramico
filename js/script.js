// --- 1. CONFIGURACIÓN ---
let texturaActual = ''; 
let modoEdicion = 'piso'; 

const misProductos = [
    { nombre: "acatlan-30x60", marca: "nitropiso" },
    { nombre: "neiva-60x60", marca: "vitromex" },
    { nombre: "alabaster-55x55", marca: "porcelanite" },
    { nombre: "noe-patio-grafito-44x44", marca: "nitropiso" }
    // Puedes ir agregando los demás poco a poco para probar
];

// --- 2. MOTOR DE PROYECCIÓN ---
function renderizarTextura(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !texturaActual) return;
    
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = texturaActual;

    img.onload = () => {
        const pts = [
            { x: document.getElementById('p1').offsetLeft, y: document.getElementById('p1').offsetTop },
            { x: document.getElementById('p2').offsetLeft, y: document.getElementById('p2').offsetTop },
            { x: document.getElementById('p3').offsetLeft, y: document.getElementById('p3').offsetTop },
            { x: document.getElementById('p4').offsetLeft, y: document.getElementById('p4').offsetTop }
        ];

        const viewport = document.getElementById('viewport');
        canvas.width = viewport.clientWidth;
        canvas.height = viewport.clientHeight;

        const srcPts = [0, 0, img.width, 0, img.width, img.height, 0, img.height];
        const dstPts = [pts[0].x, pts[0].y, pts[1].x, pts[1].y, pts[2].x, pts[2].y, pts[3].x, pts[3].y];
        
        const transform = PerspectiveTransform(srcPts, dstPts);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.transform = transform.getCSS();
        canvas.style.transformOrigin = "0 0";
        canvas.style.mixBlendMode = "multiply"; 
        
        ctx.drawImage(img, 0, 0, img.width, img.height);
    };
}

// --- 3. INTERFAZ Y BOTONES ---
function mostrarProductos(marca) {
    const contenedor = document.getElementById('catalog-container');
    if (!contenedor) return;
    
    contenedor.innerHTML = ''; 

    misProductos.forEach(producto => {
        if (marca === 'todas' || producto.marca === marca) {
            const card = document.createElement('div');
            card.className = 'tile-card';
            
            const ruta = `img/ceramicas/${producto.nombre}.jpg`;

            card.innerHTML = `
                <img src="${ruta}" onerror="this.src='img/ceramicas/${producto.nombre}.png'">
                <p>${producto.nombre.replace(/-/g, ' ')}</p>
            `;

            card.onclick = () => {
                texturaActual = card.querySelector('img').src;
                renderizarTextura('floor-canvas');
            };
            contenedor.appendChild(card);
        }
    });
}

function cambiarHabitacion(archivo) {
    const bg = document.getElementById('bg-room');
    if (bg) bg.src = 'img/habitaciones/' + archivo;
}

// --- 4. INICIO ---
window.onload = () => {
    console.log("Simulador cargado correctamente");
    mostrarProductos('todas');
};
