import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AlertResume from './components/AlertResume';
import styles from './resume.module.css'

function ResumeView(props) {
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
    const { userPetitioner, management, functionalName, idBot, file, selectedTicket } = location.state;

    return (
        <>
            <Header />
            <div className={styles.containerResume}>
                <h2 className={styles.prueba}>Resumen de Datos</h2>
                <ul className={styles.listResume}>
                    <li className={styles.li}><strong className={styles.listStrong}>Usuario Solicitante:</strong> {userPetitioner}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>Ticket:</strong> {selectedTicket}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>Gerencia:</strong> {management}</li>
                    <li className={styles.li}><strong className={styles.listStrong}>ID del Robot:</strong> {idBot}</li>
                    <li className={styles.finalLi}><strong className={styles.listStrong}>Nombre Funcional del Robot:</strong> {functionalName}</li>
                </ul>
                {file && (
                    <div>
                        <p id="pFile">Archivo Seleccionado:</p>
                        {file.type.startsWith('image/') ? (<img className={styles.imageResume} src={URL.createObjectURL(file)} alt="Imagen" />) : (<video controls> <source src={URL.createObjectURL(file)} type={file.type} />Tu navegador no admite la reproducción de videos.</video>
                        )}
                    </div>

                )}
                <p><strong>Su número de solicitud es: {count}</strong></p>
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