import { Link, useLocation } from 'react-router-dom';
import styles from "./breadcrumbs.module.css"

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const routeNames = {
        Home: 'Home',
        FormRequest: 'Requerimientos',
        FormIncidence: 'Incidencias',
        Resume: 'Resumen de Datos'
    };

    return (
        <div className={styles.container}>
            <Link className={pathnames.length === 0 ? `${styles.link} ${styles.active}` : styles.link} to="/">Inicio</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isActive = index === pathnames.length - 1;
                return (
                    <span key={to} className={styles.separator}>
                        {' > '}
                        <Link className={isActive ? `${styles.link} ${styles.active}` : styles.link} to={to}>
                            {routeNames[value] || value}
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
