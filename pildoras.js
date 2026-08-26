const categoriasSeo = [
    {
        nombre: "WPO",
        subtitulo: "Optimización de velocidad y rendimiento web",
        descripcion: "Mejora el TTFB, optimiza recursos y acelera tus tiempos de carga.",
        enlace: "categoria-wpo.html"
    },
    {
        nombre: "Indexación",
        subtitulo: "Gestión de bots y rastreo",
        descripcion: "Domina el robots.txt, los meta robots y haz que Google descubra tu contenido.",
        enlace: "categoria-indexacion.html"
    },
    {
        nombre: "Canonicidad",
        subtitulo: "Control del contenido duplicado",
        descripcion: "Aprende a usar etiquetas canonical y evita problemas de cannibalization.",
        enlace: "categoria-canonicidad.html"
    }
];

// menu desplegable

const botonMenu = document.querySelector('.menu-desplegable');
const listaMenu = document.querySelector('.nav-menu .menu');

if (botonMenu && listaMenu) {
    botonMenu.addEventListener('click', () => {
        listaMenu.classList.toggle('show');
    });
}


// Capturamos el contenedor del HTML
const blogContainer = document.getElementById('blog-container');

// Comprobamos que el contenedor existe para evitar errores
if (blogContainer) {
    
    for (let i = 0; i < categoriasSeo.length; i++) {
        const categoria = categoriasSeo[i]; // 

        const div = document.createElement('div');
        div.className = "tarjeta-blog";

        // Inyectamos la estructura adaptada a las categorías
        div.innerHTML = `
            <h3>${categoria.nombre}</h3>
            <small>${categoria.subtitulo}</small>
            <p>${categoria.descripcion}</p>
            <a href="${categoria.enlace}" class="btn-leer" data-categoria="${categoria.nombre}">
                Ir a artículos de ${categoria.nombre}
            </a>   
            
            `;
 
        
        
        // Añadimos la tarjeta generada al contenedor principal de la página
        blogContainer.appendChild(div);


    }
}