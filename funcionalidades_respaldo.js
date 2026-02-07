// Datos de las catrinas
        const catrinasData = {
            clasica: {
                title: "Catrina Clásica",
                images: [
                    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Esta catrina clásica representa la tradición mexicana en su máxima expresión. Elaborada con barro de Capula y pintada a mano en Guadalajara, cada detalle ha sido cuidadosamente trabajado por artesanos expertos durante más de 40 horas de trabajo.",
                material: "Barro artesanal",
                height: "35 cm",
                technique: "Pintura a mano con acrílicos",
                origin: "Capula, Michoacán",
                available: true,
                price: "$1,850 MXN"
            },
            floral: {
                title: "Catrina Floral",
                images: [
                    "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1542643397-662e64e6d6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Decorada con flores de cempasúchil y rosas, esta catrina simboliza la belleza efímera de la vida. Los colores vibrantes y los detalles florales hacen de esta pieza una obra única.", 
                material: "Barro con detalles en cerámica",
                height: "40 cm",
                technique: "Pintura a mano con esmaltes",
                origin: "Guadalajara, Jalisco",
                available: true,
                price: "$2,200 MXN"
            },
            elegante: {
                title: "Catrina Elegante",
                images: [
                    "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Con un diseño sofisticado y elegante, esta catrina viste traje de gala y sombrero decorado. Perfecta para coleccionistas exigentes que buscan piezas de alta calidad.",
                material: "Barro fino con detalles en oro",
                height: "45 cm",
                technique: "Técnica mixta con dorados",
                origin: "Capula y Guadalajara",
                available: false,
                price: "$3,500 MXN"
            },
            // Dentro del objeto catrinasData, agrega esta categoría:
            tradicional: {
    title: "Catrina de Barro Natural",
    slides: [
        {
            image: "https://images.unsplash.com/photo-1542643397-662e64e6d6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Catrina elaborada completamente en barro natural sin pintura, mostrando la belleza cruda del material. Inspirada en las técnicas ancestrales de Capula.",
            material: "Barro natural sin pintar",
            height: "30 cm",
            technique: "Modelado tradicional sin acabados",
            origin: "Capula, Michoacán",
            available: true,
            price: "$900 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Vista lateral que muestra las texturas naturales del barro y las marcas del proceso artesanal. Cada imperfección cuenta una historia.",
            material: "Barro rojo natural",
            height: "30 cm",
            technique: "Cocción tradicional en horno de leña",
            origin: "Capula, Michoacán",
            available: true,
            price: "$900 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Detalle de la textura porosa del barro que permite apreciar la técnica ancestral de modelado. Ideal para puristas de la artesanía.",
            material: "Barro con textura natural",
            height: "30 cm",
            technique: "Técnica de pellizco tradicional",
            origin: "Capula, Michoacán",
            available: true,
            price: "$950 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Catrina en barro natural con detalles minimalistas. Resalta la belleza del material en su estado más puro y auténtico.",
            material: "Barro negro natural",
            height: "30 cm",
            technique: "Pulido manual con piedra",
            origin: "Capula, Michoacán",
            available: false,
            price: "$1,000 MXN"
        }
    ]
},
            moderna: {
    title: "Catrina Moderna",
    slides: [
        {
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Una reinterpretación contemporánea de la catrina tradicional. Líneas limpias, colores modernos y un diseño vanguardista que fusiona tradición con arte moderno.",
            material: "Barro y resina",
            height: "38 cm",
            technique: "Técnica mixta digital y manual",
            origin: "Guadalajara, Jalisco",
            available: true,
            price: "$2,800 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Diseño geométrico y abstracto que reinterpreta los símbolos tradicionales del Día de Muertos con una estética contemporánea.",
            material: "Barro con acabado metálico",
            height: "38 cm",
            technique: "Impresión 3D y acabado manual",
            origin: "Guadalajara, Jalisco",
            available: true,
            price: "$2,800 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Fusión de técnicas tradicionales con materiales modernos. Los colores neón contrastan con la base de barro tradicional.",
            material: "Barro con pigmentos fluorescentes",
            height: "38 cm",
            technique: "Aerografía y pintura acrílica",
            origin: "Guadalajara, Jalisco",
            available: true,
            price: "$3,000 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Catrina minimalista con líneas limpias y paleta de colores restringida. Una pieza para espacios de diseño contemporáneo.",
            material: "Barro blanco y acero",
            height: "38 cm",
            technique: "Escultura moderna con ensamblaje",
            origin: "Guadalajara, Jalisco",
            available: true,
            price: "$3,200 MXN"
        }
    ]
},
            personalizada: {
                title: "Catrina Personalizada",
                images: [
                    "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1543857778-c4a1a569e388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ],
                description: "Creada según las especificaciones del cliente. Puede incluir colores, diseños y elementos personalizados. Cada pieza es única y se elabora bajo pedido.",
                material: "A elección del cliente",
                height: "Variable",
                technique: "Personalizada",
                origin: "Capula y Guadalajara",
                available: true,
                price: "Desde $3,000 MXN"
            },
            especial: {
    title: "Catrina Especial Edición Limitada",
    slides: [
        {
            image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Edición especial limitada a 50 piezas. Incluye certificado de autenticidad y detalles exclusivos en plata y oro. Una verdadera obra de arte coleccionable.",
            material: "Barro fino con plata y oro",
            height: "50 cm",
            technique: "Artesanía de lujo",
            origin: "Capula y Joyería tapatía",
            available: true,
            price: "$8,500 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Detalle de los acabados en plata repujada que adornan el vestido de la catrina. Cada pieza lleva el número de serie grabado.",
            material: "Barro con incrustaciones de plata",
            height: "50 cm",
            technique: "Repujado y grabado manual",
            origin: "Talleres especializados Guadalajara",
            available: true,
            price: "$8,500 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Certificado de autenticidad que acompaña a cada pieza de la edición limitada. Incluye firma del artesano y número de serie.",
            material: "Barro con detalles en oro de 24k",
            height: "50 cm",
            technique: "Técnicas de orfebrería aplicadas",
            origin: "Capula y Guadalajara",
            available: true,
            price: "$8,500 MXN"
        },
        {
            image: "https://images.unsplash.com/photo-1578947973063-6f40f8c5a3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Presentación especial en caja de madera tallada. Cada catrina está numerada y viene con documentación de autenticidad.",
            material: "Barro con plata y oro, caja de madera",
            height: "50 cm",
            technique: "Artesanía de excelencia",
            origin: "Colaboración maestros artesanos",
            available: false,
            price: "$9,000 MXN"
        }
    ]
}
        };
         // Variables del carrusel
        let currentCategory = 'clasica';
        let currentSlide = 0;
        let totalSlides = 4;

        // Abrir modal
        function openModal(category) {
            currentCategory = category;
            currentSlide = 0;
            
            const data = catrinasData[category];
            const modal = document.getElementById('modal');
            
            // Actualizar título
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('pieceTitle').textContent = data.title;

            // Actualizar información
            document.getElementById('pieceDescription').textContent = data.description;
            document.getElementById('pieceMaterial').textContent = data.material;
            document.getElementById('pieceHeight').textContent = data.height;
            document.getElementById('pieceTechnique').textContent = data.technique;
            document.getElementById('pieceOrigin').textContent = data.origin;
            document.getElementById('piecePrice').textContent = data.price;
            
            // Actualizar disponibilidad
            const availabilityElement = document.getElementById('pieceAvailability');
            availabilityElement.textContent = data.available ? 'Disponible' : 'Vendida';
            availabilityElement.className = data.available ? 'available' : 'sold';

             // Actualizar imágenes del carrusel
            totalSlides = data.images.length;
            for (let i = 0; i < 4; i++) {
                const slide = document.getElementById(`slide-${i}`);
                if (slide) {
                    if (i < totalSlides) {
                        slide.querySelector('img').src = data.images[i];
                        slide.style.display = 'flex';
                    } else {
                        slide.style.display = 'none';
                    }
                }
            }

            // Actualizar dots
            updateDots();
            
            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Resetear carrusel
            showSlide(0);
        }

        // Cerrar modal
        function closeModal() {
            document.getElementById('modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

         // Navegación del carrusel
        function showSlide(index) {
            // Validar índice
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            
            currentSlide = index;
        
            // Ocultar todas las slides
            document.querySelectorAll('.carousel-slide').forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Mostrar slide actual
            const currentSlideElement = document.getElementById(`slide-${index}`);
            if (currentSlideElement) {
                currentSlideElement.classList.add('active');
            }

             // Actualizar dots
            updateDots();
        }

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

        // Cerrar modal con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
            if (e.key === 'ArrowLeft') {
                prevSlide();
            }
            if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Cerrar modal al hacer clic fuera
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });

        // Funciones del menú (mantén las existentes)
        function toggleMenu() {
            const menu = document.getElementById('menu');
            const toggle = document.querySelector('.menu-toggle');
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        }

        // Scroll suave
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    toggleMenu();
                }
            });
        });
    
        // Pre-cargar imágenes
        window.addEventListener('load', () => {
            Object.values(catrinasData).forEach(catrina => {
                catrina.images.forEach(src => {
                    const img = new Image();
                    img.src = src;
                });
            });
        });