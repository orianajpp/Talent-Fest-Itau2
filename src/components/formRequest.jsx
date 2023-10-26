import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormBotRequest() {
const [userPetitioner, setUserPetitioner] = useState('');
    const [management, setManagement] = useState('');
    const [functionalName, setFunctionalName] = useState('');
    const [idBot, setIdBot] = useState('');
    const [selectedTicket, setSelectedTicket] = useState(''); 
    const [file, setFile] = useState(null);
    
    const navigate = useNavigate(); 

    const handleAnswers = (e) => {
        e.preventDefault();
        const dataForm = {
            userPetitioner,
            management,
            functionalName,
            idBot,
            selectedTicket, 
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
            <label>Selecciona el ticket:</label>
                <select value={selectedTicket} onChange={(e) => setSelectedTicket(e.target.value)}>
                            <option value="requerimiento0"></option>
                            <option value="requerimiento1">Solicitar Revisión de Casos enviados a un Robot</option>
                            <option value="requerimiento2">Solicitar Revisión del Funcionamiento o Estado de un Robot</option>
                            <option value="requerimiento3">Modificar Horario de Procesamiento de un Robot</option>
                            <option value="requerimiento4">Agregar/Quitar Funciones a un Robot</option>
                            <option value="requerimiento5">Modificar Parámetros a un Robot</option>
                            <option value="requerimiento6">Agregar/Quitar Destinatarios de Correo a un Robot</option>
                            <option value="requerimiento7">Activar/Desactivar un Robot</option>
                            <option value="requerimiento8">Dar de Baja un Robot</option>
                </select>
            </div>
            <div>
                <label>Usuario Solicitante:</label>
                <select value={userPetitioner} onChange={(e) => setUserPetitioner(e.target.value)}>
                        <option value="user0"></option>
                        <option value="user1">Usuario 1</option>
                        <option value="user2">Usuario 2</option>
                        <option value="user3">Usuario 3</option>
                    </select>
            </div>
            <div>
                <label>Gerencia:</label>
                <select value={management} onChange={(e) => setManagement(e.target.value)}>
                        <option value="management0"></option>
                        <option value="management1">Ciberseguridad y Fraude</option>
                        <option value="management2">Compliance</option>
                        <option value="management3">Cobranza Riesgo Minoristas</option>
                        <option value="management4">Finanzas</option>
                        <option value="umanagement5">Legales</option>
                        <option value="management6">Operaciones Mayoristas</option>
                        <option value="management7">Operaciones Minoristas</option>
                        <option value="management8">Riesgo y Compliance</option>
                        <option value="management9">Tecnología</option>
                    </select>
            </div>
            <div>
                <label>Nombre Funcional del Robot:</label>
                <select value={functionalName} onChange={(e) => setFunctionalName(e.target.value)}>
                        <option value="Bot0"></option>
                        <option value="Bot1">Confeccion Informe Normativo 1</option>
                        <option value="Bot2">Bloqueo Masivo Tarjetas de Crédito</option>
                        <option value="Bot3">ProcesosBloqueoTEF</option>
                        <option value="Bot4">CNE</option>
                        <option value="Bot5">Procesos EDD</option>
                        <option value="Bot6">KYC Estados</option>
                        <option value="Bot7">KYC Personas Natural</option>
                        <option value="Bot8">KYC Personas Juridicas</option>
                        <option value="Bot9">AnalistaCondell</option>
                        <option value="Bot10">EvaluaciónCréditosCondell</option>
                        <option value="Bot11">BaseConsolidadadeAsientosContablesManuales</option>
                        <option value="Bot12">Cierre Mensual - Consolidación Contable</option>
                        <option value="Bot13">Cierre Mensual - Cartera vencida</option>
                        <option value="Bot14">Notificaciondecasosreparados2.0</option>
                        <option value="Bot15">Autollenadodepagares</option>
                        <option value="Bot16">Cursecréditosmayoristas</option>
                        <option value="Bot17">IngresodegarantíasCOMEX</option>
                        <option value="Bot18">CursePyme</option>
                        <option value="Bot19">Enviódecontratos</option>
                        <option value="Bot20">Cobo de Comisiones Corfo</option>
                        <option value="Bot21">Curse de Créditos Fogape Tradicional</option>
                        <option value="Bot22">Curse de Créditos Chile Apoya</option>
                        <option value="Bot23">LeyDeudoresdePensiones</option>
                        <option value="Bot24">Ingrerso Facility Web</option>
                        <option value="Bot25">OnboardingDigitalHipotecario</option>
                        <option value="Bot26">AnalistaROS</option>
                        <option value="Bot27">AnalistaSII</option>
                        <option value="Bot28">AnalistaSIIKYC</option>
                        <option value="Bot29">AnalistaSOS</option>
                        <option value="Bot30">UPDOWNS3</option>
                    </select>
            </div>
            <div>
                <label>ID del Robot:</label>
                <select value={idBot} onChange={(e) => setIdBot(e.target.value)}>
                        <option value="id0"></option>
                        <option value="id1">CIBFRA_CIBER_001</option>
                        <option value="id2">CIBFRA_CIBER_002</option>
                        <option value="id3">CIBFRA_CIBER_003</option>
                        <option value="id4">COAML_AML_004</option>
                        <option value="id5">COAML_AML_005</option>
                        <option value="id6">COAML_AML_006</option>
                        <option value="id7">COAML_AML_007</option>
                        <option value="id8">COAML_AML_008</option>
                        <option value="id9">CRMIN_RADM_009</option>
                        <option value="id10">CRMIN_RADM_010</option>
                        <option value="id11">FINAN_CONTA_011</option>
                        <option value="id12">FINAN_CONTA_012</option>
                        <option value="id13">FINAN_CONTA_013</option>
                        <option value="id14">LEG_FIS_014</option>
                        <option value="id15">OPMAY_COMEX_015</option>
                        <option value="id16">OPMAY_MO_016</option>
                        <option value="id17">OPMAY_OPESP_017</option>
                        <option value="id18">OPMIN_APCTA_018</option>
                        <option value="id19">OPMIN_BKOFF_019</option>
                        <option value="id20">OPMIN_CDO_020</option>
                        <option value="id21">OPMIN_CDO_021</option>
                        <option value="id22">OPMIN_CDO_022</option>
                        <option value="id23">OPMIN_CDO_023</option>
                        <option value="id24">OPMIN_CDO_024</option>
                        <option value="id25">OPMIN_SUCU_025</option>
                        <option value="id26">RICOM_AML_026</option>
                        <option value="id27">RICOM_AML_027</option>
                        <option value="id28">RICOM_AML_028</option>
                        <option value="id29">RICOM_AML_029</option>
                        <option value="id30">TI_ROBOTIC_030</option>
                    </select>
            </div>
            <div>
                <label>Subir archivo (imagen o video):</label>
                    <input type="file" accept="image/*, video/*" onChange={handleFileChange}/>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default FormBotRequest;