import { btnSubmit, formCita, inputDni, inputEmail, inputFecha, inputPaciente, inputSintomas } from './selectores.js';
import Notification from './Clases/notificacion.js';
import AdminCitas from './Clases/adminCitas.js';

let editando = false;

const objCitas = {
    id: generarID(),
    paciente : '',
    dni : '',
    email : '',
    fecha : '',
    sintomas : ''
} // Inicializar editando como false al principio

const citas = new AdminCitas();

export function dataCita(e) {
    objCitas[e.target.name] = e.target.value;
}

export function submitCita(e) {
    e.preventDefault();

    if (Object.values(objCitas).some(v => v.trim() === '')) {
        new Notification({
            texto: "Todos los campos son obligatorios",
            tipo: "error"
        });
        return;
    }

    if (editando) {
        citas.editar({ ...objCitas });
        new Notification({
            texto: "Guardado Correctamente",
            tipo: "exito"
        });
    } else {
        citas.agregar({ ...objCitas });
        new Notification({
            texto: "Paciente Registrado",
            tipo: "exito"
        });
    }

    formCita.reset();
    reiniciarObjCitas();
    btnSubmit.value = 'Registrar paciente';
    editando = false; // Después de completar la operación, establecer editando de nuevo a false
}

export function reiniciarObjCitas() {
    Object.assign(objCitas, {
        id: generarID(),
        paciente: '',
        dni: '',
        email: '',
        fecha: '',
        sintomas: ''
    });
}

export function generarID() {
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(cita) {
    Object.assign(objCitas, cita);

    inputPaciente.value = cita.paciente;
    inputDni.value = cita.dni;
    inputEmail.value = cita.email;
    inputFecha.value = cita.fecha;
    inputSintomas.value = cita.sintomas;

    btnSubmit.value = 'Guardar cambios';
    editando = true; // Al cargar la edición, establecer editando a true
}
