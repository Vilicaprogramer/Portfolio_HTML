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
