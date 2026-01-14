# Frontend routing modular

Esta carpeta usa un front controller (`frontend/index.php`) para resolver vistas con `?page=...` y centraliza rutas y assets mediante `frontend/config.php`.

Principales puntos:
- `FRONTEND_BASE` y `FRONTEND_VIEWS` definen las rutas base para assets y vistas.
- `frontend_route()` genera URLs del router para mantener compatibilidad.
- Se mantienen redirecciones legacy para `frontend/perfiles/profile-template.php`.
