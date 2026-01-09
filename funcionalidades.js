// =============================================
// FUNCIONALIDAD DEL MENÚ MÓVIL
// =============================================
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// =============================================
// FUNCIONALIDAD DEL SCROLL SUAVE
// =============================================
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Cerrar menú móvil si está abierto
                const menu = document.getElementById('menu');
                menu.classList.remove('active');
            }
        }
    });
});

// =============================================
// FUNCIONALIDAD DE LA GALERÍA (LIGHTBOX)
// =============================================
const catrinasData = {
    "Catrina Clásica": {
        icon: "💀",
        description: "La Catrina clásica, inspirada en los grabados de José Guadalupe Posada. Esta pieza representa la igualdad ante la muerte y está elaborada con barro de Capula y decorada con la técnica tradicional michoacana."
    },
    "Catrina Floral": {
        icon: "🌸",
        description: "Decorada con flores tradicionales mexicanas como cempasúchil y dalias. Esta catrina simboliza la conexión entre la vida, la muerte y la naturaleza, pintada a mano con pigmentos naturales."
    },
    "Catrina Elegante": {
        icon: "👒",
        description: "Con sombrero de plumas y vestido sofisticado, esta catrina representa la elegancia mexicana. Pieza única modelada en barro y decorada con detalles dorados a mano en Guadalajara."
    },
    "Catrina Tradicional": {
        icon: "🎭",
        description: "Inspirada en las calaveras de azúcar y las ofrendas del Día de Muertos. Mantiene los colores vibrantes y elementos típicos de la tradición mexicana, con acabados artesanales únicos."
    },
    "Catrina Moderna": {
        icon: "✨",
        description: "Reinterpretación contemporánea que fusiona elementos tradicionales con estilos actuales. Pieza de diseño vanguardista que muestra la evolución de este ícono cultural."
    },
    "Catrina Personalizada": {
        icon: "🎨",
        description: "Obra única personalizable según tus preferencias. Puede incluir elementos específicos, colores especiales o características personales, creada exclusivamente para ti."
    }
};

// Obtener elementos del DOM
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');
const lightboxIcon = document.getElementById('lightbox-icon');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const galeriaItems = document.querySelectorAll('.galeria-item');

// Agregar evento click a cada elemento de la galería
galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const data = catrinasData[title];
        
        if (data) {
            // Configurar contenido del lightbox
            lightboxIcon.textContent = data.icon;
            lightboxTitle.textContent = title;
            lightboxDescription.textContent = data.description;
            
            // Mostrar lightbox
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }
    });
});

// Cerrar lightbox al hacer clic en la X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
});

// Cerrar lightbox al hacer clic fuera del contenido
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar lightbox con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// =============================================
// ANIMACIÓN AL HACER SCROLL (Reveal)
// =============================================
function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Ejecutar al cargar la página y al hacer scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =============================================
// ANIMACIÓN PARA BOTONES
// =============================================
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// =============================================
// VALIDACIÓN BÁSICA DEL FORMULARIO
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const mensaje = form.querySelector('textarea').value;
            
            if (nombre && email && mensaje) {
                alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
                form.reset();
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
});