import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AlertResume from './components/AlertResume';
import styles from './resume.module.css'
import Breadcrumbs from './components/Breadcrumbs';

function ResumeView(props) {
    console.log('Received data:', useLocation().state);
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? JSON.parse(savedCount) : 0;
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'count') {
                setCount(JSON.parse(e.newValue));
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    const location = useLocation();
    // Accede a los datos del formulario desde las props
    const { userPetitioner, management, functionalName, idBot, file, selectedTicket, description } = location.state;

    return (
        <>
            <Header />
            <Breadcrumbs />
            <div className={styles.containerResume}>
                <h1 className={styles.h2Text}>Resumen de Datos</h1>
                <ul className={styles.listResume}>
                    <li className={styles.li}><strong className={styles.listStrong}>Usuario Solicitante:</strong> {userPetitioner}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>Ticket:</strong> {selectedTicket}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>Gerencia:</strong> {management}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>ID del Robot:</strong> {idBot}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>Nombre Funcional del Robot:</strong> {functionalName} </li>
                    <li className={styles.finalLi}><strong className={styles.listStrong}>Descripción:</strong>{description}</li>
                </ul>
                {file && (
                    <div>
                        <p id="pFile">Archivo Seleccionado:</p>
                        {file.type.startsWith('image/') ? (<img className={styles.imageResume} src={URL.createObjectURL(file)} alt="Imagen" />) : (<video controls> <source src={URL.createObjectURL(file)} type={file.type} />Tu navegador no admite la reproducción de videos.</video>
                        )}
                    </div>

                )}
                <h3 className={styles.requestNumber}><strong>Su número de solicitud es: {count}</strong></h3>
                <div>
                    <button onClick={openModal} className={styles.buttonOpenAlert}>Guardar</button>
                    {isModalOpen && (
                        <AlertResume closeModal={closeModal} count={count} />
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ResumeView;