Este proyecto corresponde a la tarea de Diseño de Interfaces Web (DIW),de la unidad 6 de la 3ª evaluación, donde se presenta una página web interactiva haciendo uso de todo lo aprendido en el curso. 
*Autor:  Manuel Ramos Molina".
*IES Al-Ándalus: curso 2024/2025

📚 Libreria_Web

Proyecto web estático que simula una librería online. Incluye varias páginas internas, fichas de libros, un carrito de compra y pequeños efectos visuales. El objetivo es practicar maquetación, estructura de proyecto y organización de archivos.
🚀 Despliegue

La web está publicada mediante GitHub Pages:

https://manuelramosmolina.github.io/Libreria_Web/ (manuelramosmolina.github.io in Bing)
🛠️ Tecnologías utilizadas

    HTML5

    CSS3

    JavaScript

    Git y GitHub

    GitHub Pages para el despliegue

📂 Estructura del proyecto

El proyecto está organizado en varias carpetas y archivos:

    Iconos/ — Iconos utilizados en la interfaz

    Imagenes/ — Recursos gráficos y fotografías

    js/

        animacion.js — Animación del logotipo

        main.js — Funciones generales de la web

        ShoppingCart.mjs — Lógica del carrito de compra

    HTML

        index.html — Página principal

        busqueda.html — Página de búsqueda

        carritoCompra.html — Carrito de compra

        contacto.html — Formulario de contacto

        ficha-libro01.html

        ficha-libro02.html

        ficha-libro03.html

        ficha-libro04.html

    CSS

        styles.css — Estilos generales

        logo_animacion.css — Animación del logotipo

        stylesCarrito.css — Estilos del carrito

    ## Optimización (rendimiento, accesibilidad y SEO)

    Este proyecto es estático y se puede optimizar sin cambiar la funcionalidad:

    - **Imágenes**: se han ajustado tamaños y peso de recursos grandes (por ejemplo, el fondo `photo-library.jpg`, las imágenes `equipo*.jpg` y el icono `Iconos/Carrito.png`) para reducir la descarga total.
    - **SEO**: se han añadido metadescripciones y títulos más descriptivos en las páginas HTML.
    - **Accesibilidad / CLS**: se han añadido atributos `width`/`height` en imágenes clave para evitar saltos de layout.
    - **Render-blocking**: se añade `preconnect` a `cdn.jsdelivr.net` y `defer` al script de Bootstrap.

    ### Caché del navegador (cabeceras)

    - En **GitHub Pages** no puedes configurar fácilmente cabeceras `Cache-Control` por archivo (depende del CDN/servidor). Por eso, la optimización de caché es limitada.
    - Si despliegas en un servidor **Apache**, puedes usar el fichero [.htaccess](.htaccess) incluido para cachear CSS/JS/imagenes durante 1 año y revalidar HTML.