console.log("JS NUEVO CARGADO");

// =============================
let modo = "piso";
let texturaActual = null;

// =============================
const misProductos = [
    { nombre: "acatlan-30x60", marca: "nitropiso" },
    { nombre: "alameda-60x60", marca: "nitropiso" }
];

// Generar ruta automática
misProductos.forEach(p => {
    p.img = `img/productos/${p.nombre}.jpg`;
});

// =============================
function mostrarProductos() {
    const contenedor = document.getElementById("catalog-container");
    contenedor.innerHTML = "";

    misProductos.forEach(p => {
        const div = document.createElement("div");

        div.innerHTML = `
            <img src="${p.img}" width="100">
            <p>${p.nombre}</p>
        `;

        contenedor.appendChild(div);
    });
}

// =============================
window.onload = () => {
    mostrarProductos();
};
