// Datos completos de todas las catrinas - CADA IMAGEN TIENE SU PROPIA INFORMACIÓN
const catrinasData = {
    clasica: {
        title: "Catrina Clásica",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina clásica tradicional con vestido rojo y flores. Elaborada completamente a mano con técnicas ancestrales en Capula, Michoacán.",
                material: "Barro artesanal de Capula",
                height: "35 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,850 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina clásica con detalles dorados y sombrero elegante. Pintura meticulosa que resalta cada detalle del traje tradicional.",
                material: "Barro fino con acabado brillante",
                height: "40 cm",
                technique: "Pintura con detalles en oro",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,100 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Elegante catrina clásica con vestido negro y rosas rojas. Pieza de colección con acabados de lujo y esmaltes especiales.",
                material: "Barro con esmalte cerámico",
                height: "38 cm",
                technique: "Técnica mixta con esmaltes",
                origin: "Capula y Guadalajara",
                available: false,
                price: "$2,300 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina clásica con sombrero de ala ancha decorado con flores de cempasúchil. Edición especial para coleccionistas.",
                material: "Barro artesanal premium",
                height: "42 cm",
                technique: "Pintura detallada a mano",
                origin: "Capula, Michoacán",
                available: true,
                price: "$2,500 MXN"
            }
        ]
    },
    floral: {
        title: "Catrina Floral",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina decorada con flores de cempasúchil y rosas. Los colores vibrantes simbolizan la vida y la muerte en perfecta armonía.",
                material: "Barro con detalles florales",
                height: "36 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,000 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1542643397-662e64e6d6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Hermosa catrina con corona de flores multicolores. Cada flor pintada individualmente con precisión milimétrica.",
                material: "Barro fino artesanal",
                height: "38 cm",
                technique: "Técnica de pincel fino",
                origin: "Capula, Michoacán",
                available: true,
                price: "$2,200 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina floral con vestido estampado de rosas. Diseño único que combina tradición y elegancia en cada pincelada.",
                material: "Barro con acabado mate",
                height: "40 cm",
                technique: "Pintura decorativa floral",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,400 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Espectacular catrina con jardín de flores en su vestido. Pieza de exhibición con más de 50 horas de trabajo artesanal.",
                material: "Barro premium con esmaltes",
                height: "45 cm",
                technique: "Pintura artística detallada",
                origin: "Colaboración Capula-Guadalajara",
                available: false,
                price: "$3,200 MXN"
            }
        ]
    },
    elegante: {
        title: "Catrina Elegante",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Elegante catrina con traje de gala y sombrero decorado con plumas. Perfecta para coleccionistas exigentes.",
                material: "Barro fino con detalles en oro",
                height: "45 cm",
                technique: "Técnica mixta con dorados",
                origin: "Capula y Guadalajara",
                available: false,
                price: "$3,500 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina elegante con vestido de terciopelo pintado. Acabados de lujo y detalles meticulosos.",
                material: "Barro premium con acabados especiales",
                height: "42 cm",
                technique: "Pintura con texturas",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$3,200 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina de alta costura con sombrero de copa. Diseño exclusivo para eventos especiales.",
                material: "Barro con incrustaciones",
                height: "48 cm",
                technique: "Técnicas avanzadas de pintura",
                origin: "Talleres especializados",
                available: true,
                price: "$3,800 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina aristocrática con bastón y joyas pintadas. Edición limitada de alta gama.",
                material: "Barro con detalles en plata",
                height: "50 cm",
                technique: "Artesanía de lujo",
                origin: "Capula y talleres de joyería",
                available: false,
                price: "$4,500 MXN"
            }
        ]
    },
    tradicional: {
        title: "Barro Natural",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1542643397-662e64e6d6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina de barro natural sin pintura. Muestra la belleza cruda del material y las técnicas ancestrales de Capula.",
                material: "Barro natural sin pintar",
                height: "30 cm",
                technique: "Modelado tradicional",
                origin: "Capula, Michoacán",
                available: true,
                price: "$900 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Barro rojo natural con texturas artesanales. Cada marca cuenta una historia del proceso de creación tradicional.",
                material: "Barro rojo natural",
                height: "32 cm",
                technique: "Cocción en horno de leña",
                origin: "Capula, Michoacán",
                available: true,
                price: "$950 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina con textura porosa natural. Ideal para amantes de la artesanía en su forma más pura y auténtica.",
                material: "Barro con textura natural",
                height: "28 cm",
                technique: "Técnica de pellizco tradicional",
                origin: "Capula, Michoacán",
                available: true,
                price: "$850 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Barro negro natural pulido. Acabado minimalista que resalta la elegancia natural del material.",
                material: "Barro negro natural",
                height: "35 cm",
                technique: "Pulido manual con piedra",
                origin: "Capula, Michoacán",
                available: false,
                price: "$1,100 MXN"
            }
        ]
    },
    mascotas: {
        title: "Mascotas",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina Xoloitzcuintle (perro azteca). Homenaje a las mascotas que nos acompañan en vida y muerte.",
                material: "Barro artesanal pintado",
                height: "25 cm",
                technique: "Pintura a mano",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Gato catrina con flores. Perfecto para amantes de los felinos y la cultura mexicana.",
                material: "Barro fino con detalles",
                height: "20 cm",
                technique: "Pintura detallada",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$1,000 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Perro catrina con sombrero. Alegre representación de nuestros fieles compañeros caninos.",
                material: "Barro artesanal",
                height: "22 cm",
                technique: "Pintura colorida",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,100 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Pareja de mascotas catrinas. Set especial para recordar a dos compañeros inseparables.",
                material: "Barro premium (2 piezas)",
                height: "18 cm cada una",
                technique: "Pintura coordinada",
                origin: "Capula y Guadalajara",
                available: true,
                price: "$2,000 MXN"
            }
        ]
    },
    personalizada: {
        title: "Catrina Personalizada",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Diseño 100% personalizado según tus especificaciones. Colores, tamaño y detalles a elección del cliente.",
                material: "A elección del cliente",
                height: "Variable (25-50 cm)",
                technique: "Personalizada",
                origin: "Capula y Guadalajara",
                available: true,
                price: "Desde $3,000 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina con profesión específica. Ideal para regalar a médicos, maestros, artistas, etc.",
                material: "Barro fino personalizado",
                height: "35-40 cm",
                technique: "Técnica especializada",
                origin: "Talleres de Guadalajara",
                available: true,
                price: "Desde $3,500 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Retrato catrina personalizado. Capturamos rasgos y estilo de la persona homenajeada.",
                material: "Barro premium",
                height: "40-45 cm",
                technique: "Escultura personalizada",
                origin: "Artistas especializados",
                available: true,
                price: "Desde $4,500 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina con temática especial. Deportes, hobbies, pasiones - cualquier tema que imagines.",
                material: "Barro artesanal",
                height: "Variable",
                technique: "Creación única",
                origin: "Capula y Guadalajara",
                available: true,
                price: "Desde $3,200 MXN"
            }
        ]
    },
    parejas: {
        title: "Parejas de Catrinas",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Pareja de catrinas tradicionales. Catrina y catrín en vestimenta clásica mexicana. Set romántico.",
                material: "Barro artesanal (2 piezas)",
                height: "35 cm cada una",
                technique: "Pintura coordinada",
                origin: "Capula, Michoacán",
                available: true,
                price: "$3,500 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Pareja de catrinas modernas. Diseño contemporáneo que mantiene la esencia tradicional mexicana.",
                material: "Barro fino (2 piezas)",
                height: "38 cm cada una",
                technique: "Estilo moderno",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$3,800 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Pareja de catrinas florales. Ambas decoradas con flores de cempasúchil en tonos complementarios.",
                material: "Barro con detalles florales (2 piezas)",
                height: "36 cm cada una",
                technique: "Pintura floral detallada",
                origin: "Capula y Guadalajara",
                available: true,
                price: "$4,000 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Pareja de catrinas elegantes de lujo. Edición limitada con detalles en oro y plata.",
                material: "Barro premium con metales (2 piezas)",
                height: "42 cm cada una",
                technique: "Artesanía de excelencia",
                origin: "Talleres especializados",
                available: false,
                price: "$6,500 MXN"
            }
        ]
    },
    moderna: {
        title: "Catrina Moderna",
        slides: [
            {
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Reinterpretación contemporánea de la catrina tradicional. Líneas limpias, colores modernos y diseño vanguardista.",
                material: "Barro y resina",
                height: "38 cm",
                technique: "Técnica mixta digital y manual",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,800 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Diseño geométrico y abstracto que reinterpreta los símbolos tradicionales del Día de Muertos.",
                material: "Barro con acabado metálico",
                height: "40 cm",
                technique: "Impresión 3D y acabado manual",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$3,000 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Fusión de técnicas tradicionales con materiales modernos. Los colores neón contrastan con la base de barro tradicional.",
                material: "Barro con pigmentos fluorescentes",
                height: "36 cm",
                technique: "Aerografía y pintura acrílica",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,600 MXN"
            },
            {
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Catrina minimalista con líneas limpias y paleta de colores restringida. Una pieza para espacios de diseño contemporáneo.",
                material: "Barro blanco y acero",
                height: "42 cm",
                technique: "Escultura moderna con ensamblaje",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$3,400 MXN"
            }
        ]
    }
};

// Variables del carrusel
let currentCategory = 'clasica';
let currentSlide = 0;
let totalSlides = 0;

// Función para abrir modal
function openModal(category) {
    currentCategory = category;
    currentSlide = 0;
    
    const data = catrinasData[category];
    if (!data) {
        console.error('Categoría no encontrada:', category);
        alert('Esta categoría no está disponible en este momento.');
        return;
    }

    const modal = document.getElementById('modal');
    totalSlides = data.slides.length;
    
    // Actualizar título del modal
    document.getElementById('modalTitle').textContent = data.title;
    
    // Crear las slides dinámicamente
    const slidesContainer = document.getElementById('carouselSlides');
    slidesContainer.innerHTML = '';
    
    data.slides.forEach((slide, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slideDiv.innerHTML = `
            <img src="${slide.image}" 
                alt="${data.title} - Imagen ${index + 1}"
                onerror="this.src='https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
        `;
        slidesContainer.appendChild(slideDiv);
    });
    
    // Actualizar información de la primera slide
    updateSlideInfo(0);
    
    // Actualizar dots
    updateDots();
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Asegurar que las imágenes se carguen correctamente
    setTimeout(() => {
        const images = slidesContainer.querySelectorAll('img');
        images.forEach(img => {
            if (!img.complete) {
                img.onload = () => {
                    // Imagen cargada correctamente
                };
                img.onerror = () => {
                    img.src = 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                };
            }
        });
    }, 100);
}

// Función para cerrar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para actualizar la información de la slide actual
function updateSlideInfo(index) {
    const data = catrinasData[currentCategory];
    const slide = data.slides[index];
    
    if (!slide) return;
    
    document.getElementById('pieceTitle').textContent = data.title;
    document.getElementById('pieceDescription').textContent = slide.description;
    document.getElementById('pieceMaterial').textContent = slide.material;
    document.getElementById('pieceHeight').textContent = slide.height;
    document.getElementById('pieceTechnique').textContent = slide.technique;
    document.getElementById('pieceOrigin').textContent = slide.origin;
    document.getElementById('piecePrice').textContent = slide.price;
    
    const availabilityElement = document.getElementById('pieceAvailability');
    availabilityElement.textContent = slide.available ? 'Disponible' : 'Vendida';
    availabilityElement.className = slide.available ? 'available' : 'sold';
}

// Función para mostrar slide
function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentSlide = index;
    
    // Ocultar todas las slides
    const slides = document.querySelectorAll('.carousel-slide');
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Mostrar slide actual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Actualizar información
    updateSlideInfo(index);
    
    // Actualizar dots
    updateDots();
}

// Navegación del carrusel
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Actualizar dots del carrusel
function updateDots() {
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentSlide ? 'active' : ''}`;
        dot.onclick = () => showSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Función para toggle del menú móvil
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Cerrar modal con teclas
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('modal');
    if (modal && modal.style.display === 'block') {
        if (e.key === 'Escape') {
            closeModal();
        }
        if (e.key === 'ArrowLeft') {
            prevSlide();
        }
        if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Cerrar modal al hacer clic fuera
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Scroll suave para los enlaces del menú
document.querySelectorAll('nav a, .footer-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
                
                // Scroll suave
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        } else if (link.getAttribute('target') === '_blank') {
            // Abrir enlaces externos en nueva pestaña
            window.open(link.getAttribute('href'), '_blank');
        } else {
            // Navegación normal
            window.location.href = link.getAttribute('href');
        }
    });
});

// Cerrar menú al hacer clic fuera en móvil
document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth <= 768 && 
        menu.classList.contains('active') &&
        !menu.contains(e.target) && 
        !toggle.contains(e.target)) {
        toggleMenu();
    }
});

// Pre-cargar imágenes para mejor experiencia
window.addEventListener('load', () => {
    // Pre-cargar imágenes de las categorías principales
    Object.values(catrinasData).forEach(categoria => {
        categoria.slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    });
    
    // Añadir clase visible a las secciones cuando entran en viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
        section.classList.add('visible'); // Para asegurar que se muestren
    });
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que el header tenga el z-index correcto
    const header = document.querySelector('header');
    if (header) {
        header.style.zIndex = '1000';
    }
    
    // Añadir efecto de scroll al header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(25, 25, 25, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(25, 25, 25, 0.85)';
            header.style.backdropFilter = 'blur(5px)';
        }
    });

        // ===== GALERÍA DE HISTORIA - CARRUSEL AUTOMÁTICO/MANUAL =====

    // Datos de las imágenes de historia
    const historiaData = [
        {
            image: "fotos/capula2.jpg",
            caption: "El pueblo de Capula, lugar donde se encuentra nuestro taller de catrinas."
        },
        {
            image: "fotos/Beto.jpg",
            caption: "Artisanos de Capula, Michoacán trabajando el barro con técnicas ancestrales transmitidas por generaciones."
        },
        {
            image: "fotos/IMG-20230614-WA0046.jpg",
            caption: "Secado natural al sol durante horas antes de la cocción en horno tradicional de leña."
        },
        {
            image: "fotos/IMG-20230608-WA0046.jpg",
            caption: "Una de nuestras pintoras especializadas decorando cada catrina con pinceles de pelo fino."
        },
        {
            image: "fotos/catrines platicando.jpg",
            caption: "Taller de pintura en Guadalajara"
        },
        {
            image: "fotos/Equipo.jpg",
            caption: "El equipo de la Calavera de Zapata en Capula."
        }
    ];

    // Variables para el carrusel de historia
    let historiaCurrentSlide = 0;
    let historiaInterval;
    const historiaIntervalTime = 5000; // 5 segundos

    // Inicializar galería de historia
    function initHistoriaGallery() {
        const slidesContainer = document.getElementById('historiaSlides');
        const indicatorsContainer = document.getElementById('historiaIndicators');
        const totalElement = document.getElementById('contadorTotal');
        
        if (!slidesContainer || !indicatorsContainer) return;
        
        // Limpiar contenedores
        slidesContainer.innerHTML = '';
        indicatorsContainer.innerHTML = '';
        
        // Crear slides
        historiaData.forEach((item, index) => {
            // Crear slide
            const slide = document.createElement('div');
            slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <img src="${item.image}" 
                    alt="Historia de La Calavera de Zapata - Imagen ${index + 1}"
                    onerror="this.src='https://images.unsplash.com/photo-1593081891737-f95ed9a53ef1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
            `;
            slidesContainer.appendChild(slide);
            
            // Crear indicador
            const indicator = document.createElement('div');
            indicator.className = `gallery-indicator ${index === 0 ? 'active' : ''}`;
            indicator.onclick = () => goToHistoriaSlide(index);
            indicatorsContainer.appendChild(indicator);
        });
        
        // Actualizar contador total
        if (totalElement) {
            totalElement.textContent = historiaData.length;
        }
        
        // Iniciar carrusel automático
        startHistoriaInterval();
        
        // Actualizar descripción inicial
        updateHistoriaCaption();
    }

    // Ir a slide específico
    function goToHistoriaSlide(index) {
        historiaCurrentSlide = index;
        showHistoriaSlide(index);
        
        // Reiniciar intervalo
        clearInterval(historiaInterval);
        startHistoriaInterval();
    }

    // Mostrar slide específico
    function showHistoriaSlide(index) {
        const slides = document.querySelectorAll('.gallery-slide');
        const indicators = document.querySelectorAll('.gallery-indicator');
        const currentElement = document.getElementById('contadorActual');
        
        // Ocultar todas las slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Desactivar todos los indicadores
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Mostrar slide actual
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        
        // Activar indicador actual
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
        
        // Actualizar contador
        if (currentElement) {
            currentElement.textContent = index + 1;
        }
        
        // Actualizar descripción
        updateHistoriaCaption();
    }

    // Actualizar descripción de la imagen
    function updateHistoriaCaption() {
        const captionElement = document.getElementById('historiaCaption');
        if (captionElement && historiaData[historiaCurrentSlide]) {
            captionElement.innerHTML = `<p>${historiaData[historiaCurrentSlide].caption}</p>`;
        }
    }

    // Slide siguiente
    function nextHistoriaSlide() {
        historiaCurrentSlide = (historiaCurrentSlide + 1) % historiaData.length;
        showHistoriaSlide(historiaCurrentSlide);
        
        // Reiniciar intervalo
        clearInterval(historiaInterval);
        startHistoriaInterval();
    }

    // Slide anterior
    function prevHistoriaSlide() {
        historiaCurrentSlide = historiaCurrentSlide === 0 ? historiaData.length - 1 : historiaCurrentSlide - 1;
        showHistoriaSlide(historiaCurrentSlide);
        
        // Reiniciar intervalo
        clearInterval(historiaInterval);
        startHistoriaInterval();
    }

    // Iniciar intervalo automático
    function startHistoriaInterval() {
        historiaInterval = setInterval(() => {
            nextHistoriaSlide();
        }, historiaIntervalTime);
    }

    // Pausar carrusel al hacer hover
    function setupHistoriaHoverEvents() {
        const galleryContainer = document.querySelector('.gallery-container');
        if (galleryContainer) {
            galleryContainer.addEventListener('mouseenter', () => {
                clearInterval(historiaInterval);
            });
            
            galleryContainer.addEventListener('mouseleave', () => {
                startHistoriaInterval();
            });
            
            // También pausar al tocar en móviles
            galleryContainer.addEventListener('touchstart', () => {
                clearInterval(historiaInterval);
            });
            
            galleryContainer.addEventListener('touchend', () => {
                // Esperar 3 segundos antes de reanudar
                setTimeout(() => {
                    startHistoriaInterval();
                }, 3000);
            });
        }
    }

    // Inicializar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', () => {
        initHistoriaGallery();
        setupHistoriaHoverEvents();
    });

    // También inicializar cuando la sección sea visible
    const observerHistoria = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la galería no está inicializada, inicializarla
                if (!document.querySelector('.gallery-slide')) {
                    initHistoriaGallery();
                    setupHistoriaHoverEvents();
                }
                startHistoriaInterval();
            } else {
                // Pausar cuando no sea visible
                clearInterval(historiaInterval);
            }
        });
    }, { threshold: 0.1 });

    // Observar la sección de historia
    const historiaSection = document.getElementById('nosotros');
    if (historiaSection) {
        observerHistoria.observe(historiaSection);
    }

});