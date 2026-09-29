
const tarjetas = document.querySelectorAll(".character-card");


// ========================================
// SELECCIONAR ELEMENTOS DEL MODAL
// ========================================

const modal = document.getElementById("modal");

const modalImagen = document.getElementById("modal-imagen");

const modalNombre = document.getElementById("modal-nombre");

const modalHistoria = document.getElementById("modal-historia");

const cerrarModal = document.getElementById("cerrar-modal");


// ========================================
// INFORMACIÓN DE LOS PERSONAJES
// ========================================

const personajes = {

    luffy: {
        nombre: "Monkey D. Luffy",

        imagen: "img/luffy.jpg",

        historia:
            "Un joven que comió la Fruta Gomu Gomu y se convirtió " +
            "en hombre de goma. Sueña con encontrar el One Piece y " +
            "ser el Rey de los Piratas. Es impulsivo, despreocupado " +
            "y leal a sus amigos. Sus momentos clave incluyen declarar " +
            "la guerra al Gobierno Mundial en Enies Lobby para rescatar a " +
            "Robin, y despertar el Gear 5 contra Kaido, revelando que su " +
            "fruta es la del mítico Dios del Sol Nika."
    },


    zoro: {
        nombre: "Roronoa Zoro",

        imagen: "img/zoro.jpg",

        historia:
            "Usa tres katanas y sueña con ser el mejor del mundo."+
            " Es serio, leal y de gran sentido del honor . Su momento "+
            "más icónico es en Thriller Bark, donde recibe todo el dolor"+
            " de Luffy de parte de Kuma y, ensangrentado, dice: “No ha"+
            " pasado nada. ¡No me importa morir! ¡No me importa morir!"
    },


    nami: {
        nombre: "Nami",

        imagen: "img/nami.jpg",

        historia:
            "Nami es la navegante de los Piratas del Sombrero de Paja. " +
            "Es una excelente navegante y tiene como objetivo crear " +
            "un mapa completo del mundo."
    },


    sanji: {
        nombre: "Vinsmoke Sanji",

        imagen: "img/sanji.jpg",

        historia:
            "Sanji es el cocinero de los Piratas del Sombrero de Paja. " +
            "Es un excelente cocinero y utiliza principalmente sus piernas " +
            "para combatir. Su sueño es encontrar el legendario All Blue."
    },

    ace: {
        nombre: "Portgas D. Ace",

        imagen: "img/ace.jpg",

        historia:
            "Es hijo biológico de Gol D. Roger y hermano jurado de Luffy y Sabo. " +
            "Comió la Fruta Mera Mera y utiliza principalmente el fuego para combatir. " +
            "Su sueño es hacer que Barbablanca sea el Rey de los Piratas. " +
            "Su momento más icónico es morir protegiendo a Luffy en Marineford, " +
            "tras ser traspasado por Akainu."
    }

};


// ========================================
// ABRIR EL MODAL
// ========================================

tarjetas.forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        // Obtener el nombre del personaje
        const personaje = tarjeta.dataset.personaje;


        // Buscar los datos del personaje
        const datos = personajes[personaje];


        // Si no existe información, no hacer nada
        if (!datos) {
            return;
        }


        // Colocar información en el modal

        modalImagen.src = datos.imagen;

        modalImagen.alt = datos.nombre;

        modalNombre.textContent = datos.nombre;

        modalHistoria.textContent = datos.historia;


        // Mostrar modal

        modal.style.display = "flex";

    });

});


// ========================================
// CERRAR EL MODAL CON LA X
// ========================================

cerrarModal.addEventListener("click", () => {

    modal.style.display = "none";

});


// ========================================
// CERRAR AL HACER CLIC FUERA
// ========================================

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.style.display = "none";

    }

});


// ========================================
// CERRAR CON LA TECLA ESC
// ========================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        modal.style.display = "none";

    }

});

