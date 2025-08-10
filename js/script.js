document.addEventListener("DOMContentLoaded", () => {
  // Menú hamburguesa
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Cambio de foto con transición suave
  const foto = document.getElementById("foto-perfil");
  let hoverTimeout;

  foto.addEventListener("mouseenter", () => {
    foto.style.opacity = 0;
    hoverTimeout = setTimeout(() => {
      foto.src = "images/vilica.JPEG";
      foto.style.opacity = 1;
    }, 500);
  });

  foto.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimeout);
    foto.style.opacity = 0;
    setTimeout(() => {
      foto.src = "images/fondo_negro.JPEG";
      foto.style.opacity = 1;
    }, 500);
  });

  // ✅ Popup de cookies
  const cookiesPopup = document.getElementById("cookies-popup");
  const aceptarBtn = document.getElementById("cookies-aceptar");
  const rechazarBtn = document.getElementById("cookies-rechazar");

  const cookiesDecision = localStorage.getItem("cookiesDecision");

  if (!cookiesDecision && cookiesPopup) {
    cookiesPopup.classList.add("show");
  }

  if (aceptarBtn) {
    aceptarBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesDecision", "aceptadas");
      cookiesPopup.classList.remove("show");
    });
  }

  if (rechazarBtn) {
    rechazarBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesDecision", "rechazadas");
      cookiesPopup.classList.remove("show");
    });
  }
});

const form = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('https://formspree.io/f/mvgqdqba', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'Mensaje enviado correctamente. ¡Gracias!';
        form.reset();
      } else {
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
      formMessage.style.display = 'block';
      formMessage.style.color = 'red';
      formMessage.textContent = 'Error de red. Por favor, inténtalo más tarde.';
    });
  });