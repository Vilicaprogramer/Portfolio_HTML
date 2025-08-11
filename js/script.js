document.addEventListener("DOMContentLoaded", () => {
  // ===== Menú hamburguesa =====
  // Busco el botón (icono ☰) y la lista del menú
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  // Al hacer click, alterno la clase .active para abrir/cerrar el menú en móvil
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // ===== Cambio de foto con transición suave =====
  // Cojo la imagen de perfil y creo una variable para controlar el timeout
  const foto = document.getElementById("foto-perfil");
  let hoverTimeout;

  // Cuando paso el ratón por encima, bajo la opacidad y a los 500ms cambio la imagen
  foto.addEventListener("mouseenter", () => {
    foto.style.opacity = 0;
    hoverTimeout = setTimeout(() => {
      foto.src = "images/vilica.JPEG";
      foto.style.opacity = 1;
    }, 500);
  });

  // Cuando saco el ratón, limpio el timeout y vuelvo a la imagen original con la misma transición
  foto.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    foto.style.opacity = 0;
    setTimeout(() => {
      foto.src = "images/fondo_negro.JPEG";
      foto.style.opacity = 1;
    }, 500);
  });

  // ===== Popup de cookies =====
  // Referencias al popup y a los botones de aceptar/rechazar
  const cookiesPopup = document.getElementById("cookies-popup");
  const aceptarBtn = document.getElementById("cookies-aceptar");
  const rechazarBtn = document.getElementById("cookies-rechazar");

  // Miro si ya hay una decisión guardada en localStorage
  const cookiesDecision = localStorage.getItem("cookiesDecision");

  // Si no hay decisión y existe el popup, lo muestro
  if (!cookiesDecision && cookiesPopup) {
    cookiesPopup.classList.add("show");
  }

  // Al aceptar, guardo "aceptadas" y oculto el popup
  if (aceptarBtn) {
    aceptarBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesDecision", "aceptadas");
      cookiesPopup.classList.remove("show");
    });
  }

  // Al rechazar, guardo "rechazadas" y oculto el popup
  if (rechazarBtn) {
    rechazarBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesDecision", "rechazadas");
      cookiesPopup.classList.remove("show");
    });
  }
});

// ===== Formulario de contacto con Formspree =====
// Cojo el formulario y el contenedor del mensaje de estado
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Cuando envío el formulario, evito el comportamiento normal (recargar página)
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Preparo los datos del formulario
  const formData = new FormData(form);

  // Hago la petición POST a Formspree con fetch
  fetch('https://formspree.io/f/mvgqdqba', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    // Si todo va bien, muestro mensaje de éxito y limpio el formulario
    if (response.ok) {
      formMessage.style.display = 'block';
      formMessage.textContent = 'Mensaje enviado correctamente. ¡Gracias!';
      form.reset();
    } else {
      // Si hay errores, intento leer el JSON de Formspree para mostrarlos
      response.json().then(data => {
        if (data.errors) {
          formMessage.style.display = 'block';
          formMessage.style.color = 'red';
          formMessage.textContent = data.errors.map(error => error.message).join(', ');
        } else {
          formMessage.style.display = 'block';
          formMessage.style.color = 'red';
          formMessage.textContent = 'Ha ocurrido un error al enviar el mensaje.';
        }
      });
    }
  }).catch(error => {
    // Si falla la red (sin conexión o similar), aviso al usuario
    formMessage.style.display = 'block';
    formMessage.style.color = 'red';
    formMessage.textContent = 'Error de red. Por favor, inténtalo más tarde.';
  });
});
