import { 
    formCita, 
    inputDni, 
    inputEmail, 
    inputFecha, 
    inputPaciente, 
    inputSintomas
} from "./selectores";
import {dataCita,submitCita} from './funciones.js'


inputPaciente.addEventListener('change',dataCita)
inputDni.addEventListener('change',dataCita)
inputEmail.addEventListener('change',dataCita)
inputFecha.addEventListener('change',dataCita)
inputSintomas.addEventListener('change',dataCita)

formCita.addEventListener('submit',submitCita)

