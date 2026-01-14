function formatearFechaDDMMYYYY(fechaISO) {
    if (!fechaISO) return "";

    const fecha = new Date(fechaISO);

    if (isNaN(fecha.getTime())) {
        console.warn("Fecha inválida:", fechaISO);
        return fechaISO; // fallback seguro
    }

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}
