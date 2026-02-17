// Datos completos de todas las catrinas - CADA IMAGEN TIENE SU PROPIA INFORMACIÓN
const catrinasData = {
    criolla: {
        title: "Catrina Criolla",
        slides: [
            {
                image: "fotos/catrina_criolla1.png",
                description: "Catrina criolla con vestido colorido con flores de cempasúchil, acompañada de una canasta. Elaborada completamente a mano con técnicas propias de Capula, Michoacán.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$2,000 MXN"
            },
            {
                image: "fotos/catrina_criolla2.png",
                description: "Catrina criolla peinada con trenzas, accesorios dorados, rebozo azul, con una olla de barro en su hombro y flores de colores en la parte inferior.",
                material: "Barro artesanal de Capula",
                height: "35 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,400 MXN"
            },
            {
                image: "fotos/catrina_criolla3.png",
                description: "Catrina criolla con dos trenzas, vestido floral y acabados dorados.",
                material: "Barro artesanal de Capula",
                height: "30 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/catrina_criolla4.png",
                description: "Catrina con reboso azul, vestido colorido floreado, con cantaro y plato en mano.",
                material: "Barro artesanal",
                height: "40 cm",
                technique: "Pintura detallada a mano",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,800 MXN"
            }
        ]
    },
    floral: {
        title: "Catrina Floral",
        slides: [
            {
                image: "fotos/catrina_floral1.png",
                description: "Catrina decorada con flores y mariposas de siferentes colores, detalles en dorado y cantaro en mano. Los colores vibrantes simbolizan la vida y la muerte en perfecta armonía.",
                material: "Barro artesanal de Capula",
                height: "35 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,600 MXN"
            },
            {
                image: "fotos/catrina_floral2.png",
                description: "Hermosa catrina con hupil de ajolote pintado detalladamente, con una falda de girasoles y cigarro en mano.",
                material: "Barro fino artesanal",
                height: "20 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/catrina_floral3.png",
                description: "Catrina floral con falda estampada de flores y mariposas de colores, con huipil florar pintado a mano, con un tocado de calas en su cabeza.",
                material: "Barro artesanal de Capula",
                height: "35 cm",
                technique: "Pintura decorativa floral",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,400 MXN"
            },
            {
                image: "fotos/catrina_floral4.png",
                description: "Espectacular catrina con jardín de flores en su vestido, tocado floral en su cabeza y falda pintada detalladamente.",
                material: "Barro artesanal de Capula",
                height: "22 cm",
                technique: "Pintura artística detallada",
                origin: "Capula, Michoacán",
                available: false,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/catrina_floral5.png",
                description: "Espectacular catrina con rebozo, trenzas y flores azules en su cabeza, flores coloridas en su vestido, cargando una corona de flores.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura artística detallada",
                origin: "Capula, Michoacán",
                available: false,
                price: "$2,200 MXN"
            }
        ]
    },
    clasica: {
        title: "Catrina Clasica",
        slides: [
            {
                image: "fotos/clasica1.png",
                description: "Catrina con coloridas plumas de pavoreal con elegantes flores en el vestido y sombrero blanco decorado con plumas.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,800 MXN"
            },
            {
                image: "fotos/clasica2.png",
                description: "Elegantes catrinas coloridas con plumas y detalles florales en vestido y sombrero.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,800 MXN"
            },
            {
                image: "fotos/clasica3.png",
                description: "Elegante catrina de vestido largo con plumas de pavoreal, hombro descubierto, combrilla y hermoso sombrero con plumas.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,800 MXN"
            },
            {
                image: "fotos/clasica4.png",
                description: "Clasicas catrinas de vestido largo y sombrero.",
                material: "Barro artesanal de Capula",
                height: "30 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,400 MXN"
            }
        ]
    },
    tradicional: {
        title: "Barro Natural",
        slides: [
            {
                image: "fotos/natural1.jpg",
                description: "Catrina de barro natural sin pintura. Muestra la belleza cruda del material y las técnicas ancestrales de Capula.",
                material: "Barro natural sin pintar",
                height: "30 cm",
                technique: "Modelado tradicional",
                origin: "Capula, Michoacán",
                available: true,
                price: "$600 - $900 MXN"
            },
            {
                image: "fotos/natural2.jpg",
                description: "Catrinas de barro rojo natural con texturas artesanales. Cada marca cuenta una historia del proceso de creación tradicional.",
                material: "Barro rojo natural",
                height: "32 - 40 cm",
                technique: "Cocción en horno de leña",
                origin: "Capula, Michoacán",
                available: true,
                price: "$600 - $900 MXN"
            },
            {
                image: "fotos/natural3.jpg",
                description: "Corazón de barro floral, con flores incrustadas individualmente.",
                material: "Barro con barniz",
                height: "25 - 40 cm",
                technique: "Modelado tradicional",
                origin: "Capula, Michoacán",
                available: true,
                price: "$850 MXN"
            },
            {
                image: "fotos/AZTECA NATURAL.jpg",
                description: "Catrin azteca debarro natural.",
                material: "Barro negro natural",
                height: "20 - 35 cm",
                technique: "Modelado tradicional",
                origin: "Capula, Michoacán",
                available: true,
                price: "$600 - $900 MXN"
            }
        ]
    },
    mascotas: {
        title: "Mascotas",
        slides: [
            {
                image: "fotos/mascota1.png",
                description: "Catrina de perro personalizado. Homenaje a las mascotas que nos acompañaron en la vida y hoy en dia ya noestán con nosotros.",
                material: "Barro artesanal de Capula",
                height: "22 cm",
                technique: "Pintura a mano",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/mascota2.png",
                description: "Ajolote catrina. Representando la conexión entre el mundo terrenal y espiritual.",
                material: "Barro artesanal de Capula",
                height: "27 cm",
                technique: "Pintura detallada",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/mascota3.png",
                description: "Perro catrina. Alegre representación de nuestros fieles compañeros caninos.",
                material: "Barro artesanal de Capula",
                height: "15 cm",
                technique: "Pintura colorida",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,000 MXN"
            }
        ]
    },
    personalizada: {
        title: "Catrina Personalizada",
        slides: [
            {
                image: "fotos/personalizado1.png",
                description: "Catrina con profesion de doctora. Colores, tamaño y detalles a elección del cliente.",
                material: "Barro artesanal de Capula",
                height: "30cm",
                technique: "Personalizada",
                origin: "Capula, Michoacán",
                available: true,
                price: "Desde $1,300 MXN"
            },
            {
                image: "fotos/personalizado2.png",
                description: "Catrina con profesión deprofesor. Ideal para regalar.",
                material: "Barro artesanal de Capula",
                height: "30 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "Desde $1,300 MXN"
            },
            {
                image: "fotos/personalizado3.png",
                description: "Retrato catrina personalizado de doctor, modelado a mano.",
                material: "Barro artesanal de Capula",
                height: "23 cm",
                technique: "Escultura personalizada",
                origin: "Capula, Michoacán",
                available: true,
                price: " Desde $500 MXN"
            },
            {
                image: "fotos/personalizado4.png",
                description: "Catrina con temática especial de cura y campesino.",
                material: "Barro artesanal de Capula",
                height: "Variable",
                technique: "Creación única",
                origin: "Capula, Michoacán",
                available: true,
                price: "Desde $1,500 MXN"
            }
        ]
    },
    parejas: {
        title: "Parejas de Catrinas",
        slides: [
            {
                image: "fotos/pareja1.png",
                description: "Pareja de Zapatas. Catrina y catrín en vestimenta clásica mexicana, vestidos con sombrero y escopeta.",
                material: "Barro artesanal de Capula",
                height: "60 cm cada una",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$12,000 MXN"
            },
            {
                image: "fotos/pareja2.jpg",
                description: "Pareja de galleros. De vestimenta colorida, con gallos en mano que mantiene la esencia tradicional mexicana.",
                material: "Barro artesanal de Capula",
                height: "38 cm - 50 cm cada una",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$6,000 - 10,000 MXN"
            },
            {
                image: "fotos/pareja3.jpg",
                description: "Pareja de catrinas clasicas, Ambas decoradas con flores de de colores en tonos complementarios.",
                material: "Barro artesanal de Capula",
                height: "36 cm cada una",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$4,000 - $6,000 MXN"
            },
            {
                image: "fotos/pareja4.jpg",
                description: "Pareja de catrinas criollas. En colores vibrantes con detalles en dorado.",
                material: "Barro artesanal de Capula",
                height: "36 cm cada una",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$4,000 - $6,000 MXN"
            }
        ]
    },
    moderna: {
        title: "Catrín",
        slides: [
            {
                image: "fotos/catrin1.png",
                description: "Catrin mezcalero pintado en tonos tierra.",
                material: "Barro artesanal de Capula",
                height: "40 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,000 MXN"
            },
            {
                image: "fotos/catrin2.png",
                description: "Catrin tradicional vestido de esmoquin negro con un cigarro en mano.",
                material: "Barro artesanal de Capula",
                height: "30 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/catrin3.png",
                description: "Catrin tradicional vestido de esmoquin con detalles dorados y pipa.",
                material: "Barro artesanal de Capula",
                height: "30 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,200 MXN"
            },
            {
                image: "fotos/catrin4.png",
                description: "Catrin ranchero con barbay sombrero.",
                material: "Barro artesanal de Capula",
                height: "42 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$3,400 MXN"
            },
            {
                image: "fotos/catrin6.png",
                description: "Catrin modelado a mano en colores calidos, acompañado de un craneo tinto floral.",
                material: "Barro artesanal de Capula",
                height: "20 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,000 MXN"
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