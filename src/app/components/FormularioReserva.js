"use client"
import { eventos } from "@/constants/eventos";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";

const FormularioReserva = () => {

  const [nombre, setNombre] = useState('');
  const [evento, setEvento] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleSubmit = (e) => {
    const texto = `Hola, mi nombre es ${nombre} y me interesa el evento de ${evento}, ${mensaje}`;
    
  // Codificar el mensaje para que se pueda usar en la URL
  const encodedText = encodeURIComponent(texto);
  
  // Redirigir a WhatsApp con el mensaje prellenado
  const url = `https://wa.me/5491160182810?text=${encodedText}`;
    window.open(url, '_blank');
  };


  return (
    <div className="h-[40rem] w-[30rem] bg-primary">
      <form onSubmit={handleSubmit} className="padding flex flex-col gap-5">
        <div>
          <label className="block mb-2 text-xl font-medium text-white">
            Nombre
          </label>
          <input
            type="text"
            id="first_name"
            className="border-transparent  focus:outline-none focus:border-transparent focus:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] text-gray-900 text-sm  focus:ring-primary focus:border-primary block w-full p-2.5"
            placeholder="Tu nombre aqui"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-xl font-medium text-white ">
            Seleccione el evento
          </label>
          <select
            id="Evento"
            className="bg-gray-50 border focus:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]  border-gray-300 text-gray-900 text-sm  block w-full p-2.5 focus:outline-none focus:border-transparent"
            value={evento}
            onChange={(e) => setEvento(e.target.value)}
          >
            {eventos.map((evento,index) => (
              <option key={index} value={evento.nombre}>
                {evento.nombre}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block mb-2 text-xl font-medium text-white "
          >
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            value={mensaje} 
            onChange={(e) => setMensaje(e.target.value)} 
            className="resize-none border-transparent focus:outline-none focus:border-transparent focus:shadow-[0_0_10px_2px_rgba(255,255,255,0.2)] block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border border-gray-300 h-48"
            placeholder="cuentanos acerca de tu evento"
          ></textarea>
        </div>

        <div>
          <ButtonPrimary text="enviar"/>
        </div>
      </form>
    </div>
  );
}

export default FormularioReserva