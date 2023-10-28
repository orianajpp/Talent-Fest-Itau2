import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <div className={styles.container}>
            <Link className={pathnames.length === 0 ? `${styles.link} ${styles.active}` : styles.link} to="/">Inicio</Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isActive = index === pathnames.length - 1;
                return (
                    <span key={to} className={styles.separator}>
                        {' > '}
                        <Link className={isActive ? `${styles.link} ${styles.active}` : styles.link} to={to}>{value}</Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;