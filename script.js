/* =============================================
   script.js — lógica compartida para todas las páginas
   ============================================= */

// ── Resaltar el enlace activo en la barra de navegación ──
(function marcarPaginaActual() {
  const links = document.querySelectorAll('a.referencias');
  const actual = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === actual || (actual === '' && href === 'index.html')) {
      link.classList.add('activo');
    }
  });
})();

// ── Sistema de Popups genérico ──
// Cada popup tiene: id del popup, id del botón que lo abre, clase del botón cierre
// Se detectan automáticamente por convención de IDs (popup, popup2, popup3, popup4)

const popupIds = ['popup', 'popup2', 'popup3', 'popup4'];

popupIds.forEach(id => {
  const popup = document.getElementById(id);
  if (!popup) return;

  // Cierre al hacer clic en el fondo oscuro
  popup.addEventListener('click', function(e) {
    if (e.target === popup) cerrarPopupById(id);
  });

  // Cierre con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') cerrarPopupById(id);
  });
});

function abrirPopupById(id) {
  const popup = document.getElementById(id);
  if (popup) popup.classList.add('activo');
}

function cerrarPopupById(id) {
  const popup = document.getElementById(id);
  if (popup) popup.classList.remove('activo');
}

// ── Funciones globales usadas inline en el HTML (tema1.html) ──
function abrirPopup()  { abrirPopupById('popup'); }
function cerrarPopup() { cerrarPopupById('popup'); }
function cerrarPopupFondo(e) { if (e.target.id === 'popup') cerrarPopupById('popup'); }

function abrirPopup2()  { abrirPopupById('popup2'); }
function cerrarPopup2() { cerrarPopupById('popup2'); }
function cerrarPopupFondo2(e) { if (e.target.id === 'popup2') cerrarPopupById('popup2'); }

function abrirPopup3()  { abrirPopupById('popup3'); }
function cerrarPopup3() { cerrarPopupById('popup3'); }
function cerrarPopupFondo3(e) { if (e.target.id === 'popup3') cerrarPopupById('popup3'); }

function abrirPopup4()  { abrirPopupById('popup4'); }
function cerrarPopup4() { cerrarPopupById('popup4'); }
function cerrarPopupFondo4(e) { if (e.target.id === 'popup4') cerrarPopupById('popup4'); }