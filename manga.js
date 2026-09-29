
document.addEventListener("DOMContentLoaded", function () {

    const paginaAnime = document.querySelector(".onepiece-history");

    if (!paginaAnime) {
        return;
    }

    const secciones = paginaAnime.querySelectorAll(
        ".history-block, .history-final"
    );

    const observador = new IntersectionObserver(
        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("historia-visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    secciones.forEach(function (seccion) {
        seccion.classList.add("historia-oculta");
        observador.observe(seccion);
    });

    const botonHistoria = paginaAnime.querySelector(
        'a[href="#inicio-historia"]'
    );

    if (botonHistoria) {

        botonHistoria.addEventListener("click", function (evento) {

            evento.preventDefault();

            const destino = document.querySelector("#inicio-historia");

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    }

    const tarjetas = paginaAnime.querySelectorAll(".story-card");

    tarjetas.forEach(function (tarjeta) {

        tarjeta.addEventListener("mouseenter", function () {
            tarjeta.style.transform = "translateY(-8px)";
        });

        tarjeta.addEventListener("mouseleave", function () {
            tarjeta.style.transform = "translateY(0)";
        });

    });

    const hero = paginaAnime.querySelector(".history-hero");

    if (hero) {

        setTimeout(function () {
            hero.classList.add("hero-cargado");
        }, 200);

    }

    const imagenes = paginaAnime.querySelectorAll(
        ".history-image img, .moment-image img"
    );

    imagenes.forEach(function (imagen) {

        imagen.addEventListener("mouseenter", function () {
            imagen.style.transform = "scale(1.05)";
        });

        imagen.addEventListener("mouseleave", function () {
            imagen.style.transform = "scale(1)";
        });

    });

    const opciones = paginaAnime.querySelectorAll(
        ".ending-lines div"
    );

    opciones.forEach(function (opcion) {

        opcion.addEventListener("mouseenter", function () {
            opcion.style.transform = "translateX(5px)";
        });

        opcion.addEventListener("mouseleave", function () {
            opcion.style.transform = "translateX(0)";
        });

    });

});

