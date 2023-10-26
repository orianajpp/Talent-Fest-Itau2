import React from 'react';
import { useLocation } from 'react-router-dom';

function ResumeView(props) {
    const location = useLocation();
// Accede a los datos del formulario desde las props
const { userPetitioner, management, functionalName, idBot, file, selectedTicket} = location.state;
    return (
    <div>
        <h2>Resumen de Datos</h2>

        <p>Usuario Solicitante: {userPetitioner}</p>
        <p>Ticket: {selectedTicket}</p>
        <p>Gerencia: {management}</p>
        <p>Nombre Funcional del Robot: {functionalName}</p>
        <p>ID del Robot: {idBot}</p>
        {file && (
        <div>
            <p>Archivo Seleccionado:</p>
            {file.type.startsWith('image/') ? (<img src={URL.createObjectURL(file)} alt="Imagen" />) : (<video controls> <source src={URL.createObjectURL(file)} type={file.type} />Tu navegador no admite la reproducción de videos.</video>
        )}
        </div>
    )}
    </div>
);
}

export default ResumeView;