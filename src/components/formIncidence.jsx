import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formCSS from './form.module.css';

function FormBotIncidence() {
    const [userPetitioner, setUserPetitioner] = useState('');
    const [management, setManagement] = useState('');
    const [functionalName, setFunctionalName] = useState('');
    const [idBot, setIdBot] = useState('');
    const [selectedTicket, setSelectedTicket] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleAnswers = (e) => {
        e.preventDefault();
        const dataForm = {
            userPetitioner,
            management,
            functionalName,
            idBot,
            selectedTicket,
            file,
            description
        };

        navigate('/Home/FormIncidence/Resume', { state: dataForm });
    };

    const handleFileChange = (e) => {
        const archivoSeleccionado = e.target.files[0];
        setFile(archivoSeleccionado);
    };

    return (
        <form className={formCSS.formContainer} onSubmit={handleAnswers}>
            <div>
                <label className={formCSS.label}>Selecciona el ticket:</label>
                <select className={formCSS.select} value={selectedTicket} onChange={(e) => setSelectedTicket(e.target.value)}>
                    <option value="incidencias0"></option>
                    <option value="Aumento en Tiempo de Procesamiento Robot">Aumento en Tiempo de Procesamiento Robot</option>
                    <option value="Problema Correo Robot">Problema Correo Robot</option>
                    <option value="Error Reporte Diario/Semanal/Mensual Robot">Error Reporte Diario/Semanal/Mensual Robot</option>
                    <option value="Aumento de Casos Excepcionados Robot">Aumento de Casos Excepcionados Robot</option>
                    <option value="Problema Ejecución Robot  por Aplicativos Banco">Problema Ejecución Robot  por Aplicativos Banco</option>
                    <option value="Problema Genérico Ejecución Robot">Problema Genérico Ejecución Robot</option>
                    <option value="Problema Accesos a Aplicativo/Base de Datos Entregados por Robotic">Problema Accesos a Aplicativo/Base de Datos Entregados por Robotic</option>
                    <option value="Problema Ejecución Base de Datos (ETL, Jobs) Robotic">Problema Ejecución Base de Datos (ETL, Jobs) Robotic</option>
                    <option value="Problema Correo Aplicativos Robotic">Problema Correo Aplicativos Robotic</option>
                    <option value="Falla Ejecución Aplicativos Web Robotic">Falla Ejecución Aplicativos Web Robotic</option>
                    <option value="Problemas Accesos CoE Robotic">Problemas Accesos CoE Robotic</option>
                    <option value="Problemas de Ejecución o Configuración CoE Robotic">Problemas de Ejecución o Configuración CoE Robotic</option>
                </select>
            </div>
            <div>
                <label className={formCSS.label}>Usuario Solicitante:</label>
                <select className={formCSS.select} value={userPetitioner} onChange={(e) => setUserPetitioner(e.target.value)}>
                    <option value="None"></option>
                    <option value="Usuario 1">Usuario 1</option>
                    <option value="Usuario 2">Usuario 2</option>
                    <option value="Usuario 3">Usuario 3</option>
                </select>
            </div>
            <div>
                <label className={formCSS.label}>Gerencia:</label>
                <select className={formCSS.select} value={management} onChange={(e) => setManagement(e.target.value)}>
                    <option value="None"></option>
                    <option value="Ciberseguridad y Fraude">Ciberseguridad y Fraude</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Cobranza Riesgo Minoristas">Cobranza Riesgo Minoristas</option>
                    <option value="Finanzas">Finanzas</option>
                    <option value="Legales">Legales</option>
                    <option value="Operaciones Mayoristas">Operaciones Mayoristas</option>
                    <option value="Operaciones Minoristas">Operaciones Minoristas</option>
                    <option value="Riesgo y Compliance">Riesgo y Compliance</option>
                    <option value="Tecnología">Tecnología</option>
                </select>
            </div>
            <div>
                <label className={formCSS.label}>Nombre Funcional del Robot:</label>
                <select className={formCSS.select} value={functionalName} onChange={(e) => setFunctionalName(e.target.value)}>
                    <option value="Bot0"></option>
                    <option value="Confeccion Informe Normativo 1">Confeccion Informe Normativo 1</option>
                    <option value="Bloqueo Masivo Tarjetas de Crédito">Bloqueo Masivo Tarjetas de Crédito</option>
                    <option value="ProcesosBloqueoTEF">ProcesosBloqueoTEF</option>
                    <option value="BCNE">CNE</option>
                    <option value="Procesos EDD">Procesos EDD</option>
                    <option value="KYC Estados">KYC Estados</option>
                    <option value="KYC Personas Natural">KYC Personas Natural</option>
                    <option value="KYC Personas Juridicas">KYC Personas Juridicas</option>
                    <option value="AnalistaCondell">AnalistaCondell</option>
                    <option value="EvaluaciónCréditosCondell">EvaluaciónCréditosCondell</option>
                    <option value="BaseConsolidadadeAsientosContablesManuales">BaseConsolidadadeAsientosContablesManuales</option>
                    <option value="Cierre Mensual - Consolidación Contable">Cierre Mensual - Consolidación Contable</option>
                    <option value="Cierre Mensual - Cartera vencida">Cierre Mensual - Cartera vencida</option>
                    <option value="Notificaciondecasosreparados2.0">Notificaciondecasosreparados2.0</option>
                    <option value="Autollenadodepagares">Autollenadodepagares</option>
                    <option value="Cursecréditosmayoristas">Cursecréditosmayoristas</option>
                    <option value="IngresodegarantíasCOMEX">IngresodegarantíasCOMEX</option>
                    <option value="CursePyme">CursePyme</option>
                    <option value="Enviódecontratos">Enviódecontratos</option>
                    <option value="Cobo de Comisiones Corfo">Cobo de Comisiones Corfo</option>
                    <option value="Curse de Créditos Fogape Tradicional">Curse de Créditos Fogape Tradicional</option>
                    <option value="Curse de Créditos Chile Apoya">Curse de Créditos Chile Apoya</option>
                    <option value="LeyDeudoresdePensiones">LeyDeudoresdePensiones</option>
                    <option value="Ingrerso Facility Web">Ingrerso Facility Web</option>
                    <option value="OnboardingDigitalHipotecario">OnboardingDigitalHipotecario</option>
                    <option value="AnalistaROS">AnalistaROS</option>
                    <option value="AnalistaSII">AnalistaSII</option>
                    <option value="AnalistaSIIKYC">AnalistaSIIKYC</option>
                    <option value="AnalistaSOS">AnalistaSOS</option>
                    <option value="UPDOWNS3">UPDOWNS3</option>
                </select>
            </div>
            <div>
                <label className={formCSS.label}>ID del Robot:</label>
                <select className={formCSS.select} value={idBot} onChange={(e) => setIdBot(e.target.value)}>
                    <option value="None"></option>
                    <option value="CIBFRA_CIBER_001">CIBFRA_CIBER_001</option>
                    <option value="CIBFRA_CIBER_002">CIBFRA_CIBER_002</option>
                    <option value="CIBFRA_CIBER_003">CIBFRA_CIBER_003</option>
                    <option value="COAML_AML_004">COAML_AML_004</option>
                    <option value="COAML_AML_005">COAML_AML_005</option>
                    <option value="COAML_AML_006">COAML_AML_006</option>
                    <option value="COAML_AML_007">COAML_AML_007</option>
                    <option value="COAML_AML_008">COAML_AML_008</option>
                    <option value="CRMIN_RADM_009">CRMIN_RADM_009</option>
                    <option value="CRMIN_RADM_010">CRMIN_RADM_010</option>
                    <option value="FINAN_CONTA_011">FINAN_CONTA_011</option>
                    <option value="FINAN_CONTA_012">FINAN_CONTA_012</option>
                    <option value="FINAN_CONTA_013">FINAN_CONTA_013</option>
                    <option value="LEG_FIS_014">LEG_FIS_014</option>
                    <option value="OPMAY_COMEX_015">OPMAY_COMEX_015</option>
                    <option value="OPMAY_MO_016">OPMAY_MO_016</option>
                    <option value="OPMAY_OPESP_017">OPMAY_OPESP_017</option>
                    <option value="OPMIN_APCTA_018">OPMIN_APCTA_018</option>
                    <option value="OPMIN_BKOFF_019">OPMIN_BKOFF_019</option>
                    <option value="OPMIN_CDO_020">OPMIN_CDO_020</option>
                    <option value="OPMIN_CDO_021">OPMIN_CDO_021</option>
                    <option value="OPMIN_CDO_022">OPMIN_CDO_022</option>
                    <option value="OPMIN_CDO_023">OPMIN_CDO_023</option>
                    <option value="OPMIN_CDO_024">OPMIN_CDO_024</option>
                    <option value="OPMIN_SUCU_025">OPMIN_SUCU_025</option>
                    <option value="RICOM_AML_026">RICOM_AML_026</option>
                    <option value="RICOM_AML_027">RICOM_AML_027</option>
                    <option value="RICOM_AML_028">RICOM_AML_028</option>
                    <option value="RICOM_AML_029">RICOM_AML_029</option>
                    <option value="TI_ROBOTIC_030">TI_ROBOTIC_030</option>
                </select>
            </div>
            <div>
                <label className={formCSS.label}>Descripción:</label>
                <textarea className={formCSS.textArea} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label className={formCSS.label}>Subir archivo (imagen o video):</label>
                <input type="file" accept="image/*, video/*" onChange={handleFileChange} className={formCSS.fileInput} />
            </div>
            <button className={formCSS.submittButton} type="submit">Enviar</button>
        </form >
    );
}

export default FormBotIncidence;