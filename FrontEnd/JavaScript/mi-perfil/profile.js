import {addInformacionFilaEmpleado, recuperarCuentas} from "./cargarDatosTabla.js";
import {initializeRowClickHandler} from "../modals/lecturaUsuario/eventListenerTabla.js";
import {initializeModalEvents} from "../modals/abrirYCerrarModal.js";
import {addEventListenerAddEmployee} from "./addAndModifyEmployee.js";

export async function cargarDatosEnTablaPerfil(data) {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';
    const vistaActual = document.body.dataset.vista;

    for (const item of data) {
        const row = await addInformacionFilaEmpleado(item);
        await tableBody.appendChild(row);
        cargarDatosEmpresa(item.name, item.description);
    }
}

function cargarDatosEmpresa(nombre, descripcion) {
    document.getElementById("store-name").textContent = nombre;
    document.getElementById("description").textContent = descripcion;
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    await recuperarCuentas()
    initializeRowClickHandler();
    initializeModalEvents();
    addEventListenerAddEmployee();
});