import {contCitas} from '../selectores.js'
import { cargarEdicion } from '../funciones.js'

class AdminCitas {
    constructor() {
         this.citas = []
    }
 
    agregar(cita){
         this.citas = [...this.citas, cita]
         this.mostrarcitas()
    }
 
    editar (citaActualizada) {
         this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
         this.mostrarcitas();
         
     }
 
     eliminar (id) {
         this.citas = this.citas.filter(cita => cita.id !== id)
         this.mostrarcitas();
 
     }
 
    mostrarcitas() {
         
         while(contCitas.firstChild) {
             contCitas.removeChild(contCitas.firstChild)
         }
 
         if(this.citas.length === 0) {
             contCitas.innerHTML= `<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>`
             new Notification ({
                 texto: "Paciente Eliminado",
                 tipo: "error"
             })
             
             return
         }
         this.citas.forEach(cita => {
             const divCita = document.createElement('div');
             divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
         
             const paciente = document.createElement('p');
             paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
             paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;
         
             const dni = document.createElement('p');
             dni.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
             dni.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.dni}`;
         
             const email = document.createElement('p');
             email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
             email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;
         
             const fecha = document.createElement('p');
             fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
             fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
         
             const sintomas = document.createElement('p');
             sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
             sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;
 
             const btnEditar = document.createElement('button');
             btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
             btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
             const clone = {...cita}
             btnEditar.onclick = () => cargarEdicion(clone);
 
             const btnEliminar = document.createElement('button');
             btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
             btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
 
             btnEliminar.onclick = () => this.eliminar(cita.id)
 
             const contBotones = document.createElement('DIV')
             contBotones.classList.add('flex','justify-between', 'mt-10')
             contBotones.appendChild(btnEditar)
             contBotones.appendChild(btnEliminar)
 
         
             divCita.appendChild(paciente);
             divCita.appendChild(dni);
             divCita.appendChild(email);
             divCita.appendChild(fecha);
             divCita.appendChild(sintomas);
             divCita.appendChild(contBotones);
             
             contCitas.appendChild(divCita);
         });    
 
    }
 }

 export default AdminCitas;