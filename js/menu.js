let menu = document.getElementById('menu');
let select = window.location.pathname
let active=`class="active"`

menu.innerHTML = `
<nav class="contenedor">
<div class="logo">
    <a href="${select.includes("index.html") ? "index.html" : "../index.html"}">
        <img class="header_logo" src="${select.includes("index.html") ? "img/logo1.png" : "../img/logo1.png"}" alt="logo">
        <h1 class="menu">CODO A CODO Logística</h1>
    </a>
</div>

<ul class="header_links">
    <li class="header_list"><a ${select.includes("index.html") ? active : ""} href='${select.includes("index.html") ? "index.html" : "../index.html"}'>Inicio</a></li>
    <li class="header_list"><a ${select.includes("nosotros.html") ? active : ""} href='${select.includes("index.html") ? "pages/nosotros.html" : "nosotros.html"}'>Nosotros</a></li>
    <li class="header_list"><a ${select.includes("servicios.html") ? active : ""} href='${select.includes("index.html") ? "pages/servicios.html" : "servicios.html"}'>Servicios</a></li>
    <li class="header_list"><a ${select.includes("contacto.html") ? active : ""} href='${select.includes("index.html") ? "pages/contacto.html" : "contacto.html"}'>Contacto</a></li>
    <li class="header_list"><a ${select.includes("clientes.html") ? active : ""} href='${select.includes("index.html") ? "pages/clientes.html" : "clientes.html"}'>Clientes</a></li>
</ul>
</nav>`


