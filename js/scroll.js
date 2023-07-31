document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento al desplazarse en la página
    window.addEventListener("scroll", function() {
        var sections = document.querySelectorAll(".section");
        sections.forEach(function(section) {
            var position = section.getBoundingClientRect();

            // Si la sección está visible en la ventana gráfica
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                section.style.opacity = 1; // Mostrar la sección

                // También puedes agregar otras animaciones, por ejemplo:
                // section.style.transform = "translateX(0)";
                // section.style.transform = "rotate(360deg)";
            } else {
                section.style.opacity = 0; // Ocultar la sección
            }
        });
    });
});