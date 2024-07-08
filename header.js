document.addEventListener("DOMContentLoaded", function() {
    const pages = {
        "/index.html": "Inicio",
        "/reservas.html": "Reservas",
        "/promociones.html": "Promociones",
        "/trabajos.html": "Trabajos",
        "/contactos.html": "Contactos",
        "./comercio/e-comers.html": "Ventas"
    };

    // Obtener la ruta relativa correcta de la página actual
    const pathParts = window.location.pathname.split("/");
    const currentPage = (pathParts.slice(-2).join("/") || "index.html").replace(/^\//, '');

    const navItems = Object.keys(pages).map(page => {
        const pageKey = page.replace(/^\.\//, ''); // Eliminar ./ del inicio de la clave
        if (pageKey === currentPage) {
            return '';
        } else {
            return `<li><a href="${page}">${pages[page]}</a></li>`;
        }
    }).join("");

    const headerContent = `
        <img src="/imagenes/barbershoplogo.png" alt="log" class="header-img">
        <nav>
            <ul>
                ${navItems}
            </ul>
        </nav>
    `;
    
    const headerElement = document.getElementById("main-header");
    if (headerElement) {
        headerElement.innerHTML = headerContent;
    } else {
        console.error("Header element with id 'main-header' not found.");
    }
});
