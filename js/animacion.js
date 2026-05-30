document.addEventListener('DOMContentLoaded', () => {
    // Animación (canvas) solo si existe en la página
    const canvas = document.getElementById('miCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const particulas = [];

            for (let i = 0; i < 30; i++) {
                particulas.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    tamaño: Math.random() * 24 + 10,
                    letra: letras[Math.floor(Math.random() * letras.length)],
                    velocidadX: Math.random() * 2 - 1,
                    velocidadY: Math.random() * 2 - 1,
                    color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.7)`
                });
            }

            function animar() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                for (const particula of particulas) {
                    ctx.font = `${particula.tamaño}px Arial`;
                    ctx.fillStyle = particula.color;
                    ctx.fillText(particula.letra, particula.x, particula.y);

                    particula.x += particula.velocidadX;
                    particula.y += particula.velocidadY;

                    if (particula.x < 0 || particula.x > canvas.width) particula.velocidadX *= -1;
                    if (particula.y < 0 || particula.y > canvas.height) particula.velocidadY *= -1;
                }

                requestAnimationFrame(animar);
            }

            animar();
        }
    }

    // Animación del logo (si existe)
    const logo = document.getElementById('my-logo');
    if (logo) {
        logo.classList.add('animate-on-load');
    }
});

// Atajo de teclado
document.addEventListener("keydown", (e) => {
  if (e.altKey && e.shiftKey && e.key.toLowerCase() === "t") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

//BOTón Subir

const btnSubir = document.getElementById('btn-subir');
if (btnSubir) {
    let visible = false;
    window.addEventListener('scroll', () => {
        const shouldBeVisible = window.scrollY > 100;
        if (shouldBeVisible === visible) return;
        visible = shouldBeVisible;
        btnSubir.style.display = shouldBeVisible ? 'block' : 'none';
    }, { passive: true });

    btnSubir.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}












