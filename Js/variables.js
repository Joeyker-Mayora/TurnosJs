import { generarID } from "./funciones.js";


let editando = {
    value:false
}
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