# Portfolio Web – Vicente Limones

Portfolio personal con mis proyectos y CV. Sitio sencillo en **HTML, CSS y JavaScript**, publicado en un hosting gratuito y con formulario de contacto vía **Formspree**.
 
> **Repositorio:** este mismo (clónalo si quieres probarlo en local).

---

## ✨ Características

- Diseño **responsive** (desktop/tablet/móvil).
- **Menú hamburguesa** en móvil.
- Tarjetas de proyectos con **efecto de relleno púrpura** al hover.
- **Popup de cookies** (estado guardado en `localStorage`).
- **Formulario de contacto** integrado con **Formspree**.
- Fuentes **Montserrat** (títulos) y **Open Sans** (texto) **cargadas localmente**.

---

## 🗂️ Estructura del proyecto

```
.
├── index.html
├── politica.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── fondo_negro.JPEG
│   ├── vilica.JPEG
│   ├── recomendador.png
│   ├── energia.png
│   └── sharks.png
└── fonts/
    ├── Montserrat/
    │   ├── Montserrat-VariableFont_wght.ttf
    │   └── Montserrat-Italic-VariableFont_wght.ttf
    └── Open_Sans/
        ├── OpenSans-VariableFont_wdth,wght.ttf
        └── OpenSans-Italic-VariableFont_wdth,wght.ttf
```

---

## 🚀 Puesta en marcha (local)

1. Clona el repo:
   ```bash
   git clone https://github.com/USUARIO/REPO.git
   cd REPO
   ```
2. Abre `index.html` en tu navegador.  
   *(Opcional: usa una extensión de “Live Server” para recargar automático).*

---

## 🧩 Integraciones

### Formspree (formulario)
El formulario envía a Formspree con `fetch`. 
> En este proyecto se usa: `https://formspree.io/f/mvgqdqba`

### Popup de cookies
- Se muestra solo si el usuario no ha decidido aún.
- Guarda la respuesta en `localStorage` con la clave `cookiesDecision`.

---

## 🧪 Plan de pruebas
- **Responsive:** 1080p, 768px, 375px.
- **Enlaces y formulario:** enlaces internos/externos y envío con validación.
- **Navegadores:** Chrome, Firefox y Edge.
- **Menú y cookies:** menú hamburguesa en móvil y funcionamiento del popup.
- **Recursos:** carga correcta de fuentes e imágenes locales.

---

## 🛠️ Tecnologías
- **HTML5**, **CSS3** (fuentes variables, `object-fit`, `aspect-ratio`), **JavaScript**.
- **Formspree** para el formulario de contacto.
- Publicación en **GitHub Pages / Netlify / Vercel**.

---

## 👤 Autor
**Vicente Limones**  
[LinkedIn](http://www.linkedin.com/in/vicente-limones-cantero-3a167328a) • <vilicaprogramer@gmail.com>

---
