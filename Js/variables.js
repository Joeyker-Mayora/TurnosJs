import { generarID } from "./funciones.js";


let editando = false;
const objCitas = {
    id: generarID(),
    paciente : '',
    dni : '',
    email : '',
    fecha : '',
    sintomas : ''
}

export {
    editando,
    objCitas
}