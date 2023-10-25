import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormBot() {
    const [userPetitioner, setUserPetitioner] = useState('');
    const [management, setManagement] = useState('');
    const [functionalName, setFunctionalName] = useState('');
    const [idBot, setIdBot] = useState('');
    const [file, setFile] = useState(null);
    
    const navigate = useNavigate(); 

    const handleAnswers = (e) => {
        e.preventDefault();
        const dataForm = {
            userPetitioner,
            management,
            functionalName,
            idBot,
            file,
        };

        navigate('/Resume', { state: dataForm });
    };

    const handleFileChange = (e) => {
        const archivoSeleccionado = e.target.files[0];
        setFile(archivoSeleccionado);
    };

    return (
        <form onSubmit={handleAnswers}>
            <div>
                <label>Usuario Solicitante:</label>
                <input type="text" value={userPetitioner} onChange={(e) => setUserPetitioner(e.target.value)}/>
            </div>
            <div>
                <label>Gerencia:</label>
                <input type="text" value={management} onChange={(e) => setManagement(e.target.value)}/>
            </div>
            <div>
                <label>Nombre Funcional del Robot:</label>
                <input type="text" value={functionalName} onChange={(e) => setFunctionalName(e.target.value)}/>
            </div>
            <div>
                <label>ID del Robot:</label>
                <input type="text" value={idBot} onChange={(e) => setIdBot(e.target.value)}/>
            </div>
            <div>
                <label>Subir archivo (imagen o video):</label>
                <input type="file" accept="image/*, video/*" onChange={handleFileChange}/>
            </div>
            <button type="submit">Enviar</button>
            
        </form>
    );
}

export default FormBot;