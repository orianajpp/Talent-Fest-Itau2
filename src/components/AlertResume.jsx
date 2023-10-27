import styles from "./alertResume.module.css";

export default function AlertResume({ closeModal, count }) {
    return (
        <div className={styles.containerAlert}>

            <div className={styles.modalOverlay}>
                <header className={styles.headerAlert}>
                    <img src="src/assets/Logo.png" />
                    <p><strong>Ingreso del ticket</strong></p>
                    <button className={`close-button ${styles.closeAlert}`} onClick={closeModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-circle-x"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#000000"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                    </button>
                </header>
                <div className={styles.hrContainer}><hr />
                    <p className={styles.pTituloAlert}><strong>¡Tu solicitud ha sido guardada con éxito!</strong></p>
                    <img className={styles.checkIcon} src="src/assets/check.png" />
                    <p className={styles.contentAlert}>A tu solicitud se le ha asignado el código de seguimiento {count}. Se enviará un correo como comprobante de tu solicitud.</p>
                </div>

            </div >
        </div>
    );
}
