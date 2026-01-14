const isLocalHost = window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';
const localBasePath = '/Gen10_Perfiles_web';

window.API_URL = isLocalHost
  ? `${window.location.origin}${localBasePath}/`
  : 'https://kreative.alphadocere.cl/';

window.API_URL_PHP = isLocalHost
  ? `${window.location.origin}${localBasePath}/backend/`
  : 'https://kreative.alphadocere.cl/backend/';

window.FRONTEND_BASE = isLocalHost
  ? `${window.location.origin}${localBasePath}/frontend/`
  : 'https://kreative.alphadocere.cl/frontend/';

window.ASSETS_BASE = isLocalHost
  ? `${window.location.origin}${localBasePath}/assets/`
  : 'https://kreative.alphadocere.cl/assets/';

window.ROUTES = {
  profileDetail: (id) =>
    `${window.FRONTEND_BASE}index.php?page=perfiles/profile-template&id=${encodeURIComponent(id)}`,
  projectDetail: (id) =>
    `${window.FRONTEND_BASE}index.php?page=project/proyecto-detalle&id=${encodeURIComponent(id)}`,
};

document.addEventListener("DOMContentLoaded", async () => {
  const perfilLink = document.getElementById("perfil-link");

  if (!perfilLink) return; // Si el botón no existe, salir

  perfilLink.style.display = "none"; // Ocultar por defecto

  const email = localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
  if (!email) return; // No hay sesión iniciada

  try {
    const apiUrl = window.API_URL_PHP || "http://localhost/Gen10_Perfiles_web/backend/";
    const response = await fetch(`${apiUrl}read_profile_by_email.php?email=${encodeURIComponent(email)}`);
    const result = await response.json();

    if (result.success && result.profile) {
      perfilLink.href = window.ROUTES.profileDetail(result.profile.id);
      perfilLink.style.display = "block"; // Mostrar si todo está correcto
    }
  } catch (error) {
    console.error("Error al buscar perfil:", error);
  }
});
