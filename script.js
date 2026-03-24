document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar página actual en el menú
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === "" && link.getAttribute('href') === "index.html")) {
            link.classList.add('active');
        }
    });

    // 2. Alerta de formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const nombre = document.getElementById('nombre').value;
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto pronto.`);
            
            contactForm.reset(); // Limpia los campos
        });
    }
});