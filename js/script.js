document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    let activeDot = null;

    // Lógica para arrastrar los puntos
    dots.forEach(dot => {
        dot.addEventListener('mousedown', (e) => {
            activeDot = dot;
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (!activeDot) return;

        const viewport = document.getElementById('viewport');
        const rect = viewport.getBoundingClientRect();

        // Calcular posición relativa al contenedor
        let x = ((e.clientX - rect.left) / rect.width) * 100;
        let y = ((e.clientY - rect.top) / rect.height) * 100;

        // Limitar para que no se salgan de la imagen
        x = Math.max(0, Math.min(100, x));
        y = Math.max(0, Math.min(100, y));

        activeDot.style.left = x + '%';
        activeDot.style.top = y + '%';
        
        // Aquí llamaremos después a la función de redibujar el piso
    });

    document.addEventListener('mouseup', () => {
        activeDot = null;
    });
});
